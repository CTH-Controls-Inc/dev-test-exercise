# Stage 1: Build the app
FROM node:16-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the app code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app
FROM node:16-alpine
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/.next ./.next

# Install only production dependencies
COPY package*.json ./
RUN npm ci 

# Expose the desired port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
