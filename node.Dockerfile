FROM node:lts-alpine

WORKDIR /srv/app

RUN apk add --no-cache bash

COPY . ./

RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]