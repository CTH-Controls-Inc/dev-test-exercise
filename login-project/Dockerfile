#Use the Node.js with base images
FROM node:14

#Set the working directory
WORKDIR /usr/src/app

#Copy package.json and package-lock.json to the working directory 
COPY package*.json ./

#install dependencies
RUN npm install

# Copy the rest of the project files 
COPY . . 

#Build the NExt.js application 
RUN npm run build 

# Expose pot 3000
EXPOSE 3000

#Set the command to the run the Next.js application 
CMD ["npm","start"]