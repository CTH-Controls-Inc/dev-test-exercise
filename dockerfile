# Use a base image with the necessary dependencies
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application files to the working directory
COPY . .

# Install dependencies
RUN npm install --production

RUN npm run build

# Specify the command to start the application
CMD ["npm","start"]

