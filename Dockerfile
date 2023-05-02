<<<<<<< HEAD
FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
=======
# Use a lightweight Node.js image as the base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Serve the application with a static server
CMD ["npm", "run", "start"]
>>>>>>> a8ba80c18b0a59c85a9eaa814809298579cc42e2
