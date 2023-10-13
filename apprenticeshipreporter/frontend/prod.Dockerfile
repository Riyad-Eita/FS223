FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY app ./app
COPY components ./components
COPY hooks ./hooks
COPY images ./images
COPY lib ./lib
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

COPY package.json package-lock.json* ./
COPY * .

RUN npm cache clean --force

# Install project dependencies using npm
RUN npm ci

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]