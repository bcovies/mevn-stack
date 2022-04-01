FROM node:17

WORKDIR /opt/backend

COPY ./node/package* ./

RUN npm install

COPY ./node/src ./src

CMD [ "npm", "run", "startDev"]