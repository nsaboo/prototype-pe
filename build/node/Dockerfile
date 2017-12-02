FROM node:latest

# Create app directory
WORKDIR /usr/src/app

RUN mkdir logs

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install && npm cache clean --force

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
