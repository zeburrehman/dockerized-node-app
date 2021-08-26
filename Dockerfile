FROM node:alpine3.14

WORKDIR /home/app/dockerized-node

COPY package*.json .

RUN ["npm", "install"]

COPY . .

CMD [ "npm", "start" ]