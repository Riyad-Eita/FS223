# Use a smaller base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy only necessary files for dependency installation
COPY package*.json package-lock*.json ./


# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]