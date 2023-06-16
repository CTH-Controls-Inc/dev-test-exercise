FROM node:8-alpine

WORKDIR /cth-dev-test-exercise-anitha

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev