FROM node:lts-alpine

WORKDIR /node

RUN apk add --no-cache bash
COPY src/ nodemon.json package.json tsconfig.json ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
