FROM node:20-alpine as base

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . ./

ENV PORT 80
ENV CHOKIDAR_USEPOLLING true
ENV WEBPACK_USEPOLLING true
ENV WATCHPACK_POLLING true

ENTRYPOINT [ "npm", "start"]
