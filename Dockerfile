# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the entire project directory to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to start the Next.js server
CMD ["npm", "start"]


# In terminal, build your docker don't miss the '.' at the end when build in this dicrectory 
# docker build -t dev-test-cth .  

# docker run -dp 3001:3000 dev-test-cth
# docker run -dp 3000:3000 dev-test-cth
# docker ps (to see if dev-test-cth is running)
# localhost:yourPort