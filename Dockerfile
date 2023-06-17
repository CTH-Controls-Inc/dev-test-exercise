# Useing the official Node.js 
FROM node:18

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the working directory
COPY . .`

# Build the Nextjs application for production
RUN npm run build

# Exposing port 3000
EXPOSE 3000

# command to run the application when the container starts
CMD ["npm", "start"]