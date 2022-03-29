FROM node:17

WORKDIR /opt/mern-stack

COPY ./node/package* ./

RUN npm install

COPY ./node/src ./src

# CMD [ "npm", "run", "startDev"]