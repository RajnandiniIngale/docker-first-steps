FROM node:22-alpine

# /app/ - '/' at end denotes create the app directory if doesn't exists already
COPY package.json /app/

COPY src /app/

WORKDIR /app

RUN npm install

# we have already copied src directory inside /app directory
CMD ["node", "server.js"]