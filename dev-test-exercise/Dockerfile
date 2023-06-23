FROM --platform=amd64 node:16-bullseye

WORKDIR /next-test

COPY package.json .
COPY src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]