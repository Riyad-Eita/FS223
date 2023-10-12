FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json* ./
COPY * .

# Install project dependencies using npm
RUN npm ci

COPY app ./app
COPY components ./components
COPY hooks ./hooks
COPY images ./images
COPY lib ./lib
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

# Start Next.js in development mode
CMD npm run dev
