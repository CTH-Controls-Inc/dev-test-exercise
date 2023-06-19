FROM node:16-alpine

WORKDIR /login

COPY package*.json ./

RUN apk add --no-cache python3 make g++

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev