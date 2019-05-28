import requests
res = requests.post('http://localhost:5000/v1/api/1234', json={"user":[0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0]})
if res.ok:
    print(res.json())
