# Use a base image with Maven for building
FROM maven:3.6.3-openjdk-17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven POM file and build your application
COPY . .
COPY pom.xml .
#RUN mvn dependency:go-offline
# RUN mvn -e -X -Dsurefire.rerunFailingTestsCount=3 package 
RUN mvn package 

# Copy the JAR file built in the previous stage to the /target directory
COPY *.jar .

# Expose the port that your Spring Boot application is running on
EXPOSE 8080

# Command to run your Spring Boot application
ENTRYPOINT ["java","-jar", "./target/apprenticeshipreporter.jar"]
