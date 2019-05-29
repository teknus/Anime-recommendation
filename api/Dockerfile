FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential 
RUN pip3 install pandas sklearn flask
WORKDIR /usr/src/app
COPY ./*.csv ./
COPY ./server.py ./
COPY ./GropClassificator.pkl ./
ENTRYPOINT ["python3"]
CMD ["server.py"]