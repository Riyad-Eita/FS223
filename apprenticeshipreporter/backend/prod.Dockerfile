# Use a base image with Maven and Java 17
FROM maven:3.8.5-openjdk-17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the Spring Boot application and package it into a JAR file
RUN mvn clean package -X

# Create a smaller image to run the application
FROM openjdk:22-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file built in the previous stage
COPY --from=builder /app/target/backend.jar /app/backend.jar

# Expose the port that your Spring Boot application is running on
EXPOSE 8080

# Command to run your Spring Boot application
CMD ["java", "-jar", "backend.jar"]
