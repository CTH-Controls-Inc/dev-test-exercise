# Use a base image with the desired runtime environment
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files to the container
COPY . /app

# Install any dependencies required by the application
RUN npm install

# Specify the command to run when the container starts
CMD ["npm", "run", "start"]

