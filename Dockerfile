FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install --dev
RUN npm run dev
CMD ["npm", "start"]