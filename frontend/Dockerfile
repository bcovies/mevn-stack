FROM node:17

WORKDIR /opt/frontend

COPY ./node/package* ./

RUN npm install

COPY ./node/src ./src

COPY ./node/public ./public

CMD [ "npm", "run", "start"]