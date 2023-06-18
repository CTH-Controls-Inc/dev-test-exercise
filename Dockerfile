FROM node:16.20.0-alpine3.18

ARG PROJECT_NAME=login-app

ENV PROJECT_HOME=/opt/${PROJECT_NAME}

RUN mkdir ${PROJECT_HOME}

WORKDIR ${PROJECT_HOME}

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]