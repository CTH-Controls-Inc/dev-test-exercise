FROM node
WORKDIR /app
COPY client/package.json client/package-lock.json ./client/
RUN npm install --prefix ./client
COPY . .
EXPOSE 3000
CMD ["npm", "start", "--prefix", "client"]