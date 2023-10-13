FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json* ./

COPY * .

RUN npm ci

RUN npm run build

CMD npm run start
