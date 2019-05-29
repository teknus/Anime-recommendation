from flask import Flask, request, jsonify
from sklearn.externals import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
path = "" 
clf = joblib.load(path + "GropClassificator.pkl")

def get_restaurants(group):
    customers = []
    with open(path + "grouped_users.csv") as file:
        customers = pd.read_csv(file)
    ratings = []
    with open(path + "rating_final.csv") as file:
        ratings = pd.read_csv(file)
    geoplaces2 = []
    with open(path + "geoplaces2.csv") as file:
        geoplaces2 = pd.read_csv(file)
    restaurants = set()
    for id in customers[customers.group == group].userID:
        for el in ratings.values:
                if el[0] == id:
                    if el[2] + el[3] +el[4] != 0:
                        restaurants.add((el[0],el[1],el[2],el[3],el[4]))
    restaurants = list(restaurants)
    response = set()
    for g in geoplaces2.values:
        for r in restaurants:
            if g[0] == r[1]:
                response.add((g[4],g[5],r[2],r[3],r[4]))
    response = list(response)
    response.sort(key=lambda i: -1 * (i[2] + i[3] + i[4]))
    return response


@app.route('/v1/api/<uuid>', methods=['GET', 'POST'])
def predict(uuid):
    content = request.json['user']
    item_g = clf.predict([np.array(content)])[0]
    return jsonify({"restaurants":get_restaurants(item_g)})

if __name__ == '__main__':
    app.run(host= '0.0.0.0',debug=True)
