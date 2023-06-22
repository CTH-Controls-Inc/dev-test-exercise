FROM node:18.11.0

# Set up server working directory
WORKDIR /app/server

# Install server dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install

# Copy server source code
COPY server/ .

# Set up client working directory
WORKDIR /app/client

# Install client dependencies
COPY client/package.json client/package-lock.json ./
RUN npm install

# Copy client source code
COPY client/ .

# Expose the frontend and backend ports
EXPOSE 3000
EXPOSE 3001

# Set up startup script
WORKDIR /app
COPY startup.sh .

# Grant execute permissions to the startup script
RUN chmod +x startup.sh

# Start the frontend and backend
CMD ["./startup.sh"]
