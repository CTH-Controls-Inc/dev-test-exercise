# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js app
RUN npm run build

# Set the environment variable
ENV PORT=3000

# Expose the port
EXPOSE ${PORT}

# Start the Next.js app
CMD ["npm", "start"]
