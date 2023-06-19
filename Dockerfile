# Use the official lightweight Node.js 14 image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 for the Next.js application
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
