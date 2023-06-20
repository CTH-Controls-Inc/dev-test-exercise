# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the Next.js app will listen on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]