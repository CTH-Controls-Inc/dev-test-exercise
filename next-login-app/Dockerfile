FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
