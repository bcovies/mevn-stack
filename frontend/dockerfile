FROM node:17

WORKDIR /opt/frontend

COPY package* ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "serve"]