FROM node:20

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENV PORT=8080

EXPOSE 8080

RUN npm run build

CMD [ "npm", "start" ]