FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

# mapping code with compose file volume
# COPY . .

EXPOSE 3000

CMD npm run dev