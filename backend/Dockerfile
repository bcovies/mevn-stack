FROM node:17

WORKDIR /opt/backend

COPY package* ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "startDev"]