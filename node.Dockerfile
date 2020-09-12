FROM node:lts-alpine

WORKDIR /srv/app

RUN apk add --no-cache bash
COPY . ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "dev" ]