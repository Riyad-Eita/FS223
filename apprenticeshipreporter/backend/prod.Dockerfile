
# #
# # Build stage
# #
# FROM openjdk:17-jdk AS build
# ENV HOME=/usr/app
# RUN mkdir -p $HOME
# WORKDIR $HOME
# ADD . $HOME
# RUN --mount=type=cache,target=/root/.m2 ./mvnw -f $HOME/pom.xml clean package -X

# #
# # Package stage
# #
# FROM openjdk:17-jdk 
# ARG JAR_FILE=/usr/app/target/*.jar
# COPY --from=build $JAR_FILE /app/runner.jar
# EXPOSE 8080
# ENTRYPOINT java -jar /app/runner.jar


# # First, use the Maven image with Java 17 as the builder stage
# FROM maven:3.8.5-openjdk-17 AS builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the source code into the container
# COPY . .

# RUN ./mvnw -f $HOME/pom.xml clean package -X

# # Create a smaller image to run the application
# FROM openjdk:17-jdk

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the JAR file built in the previous stage
# COPY --from=builder /app/target/auth-0.0.1-SNAPSHOT.jar /app/auth-0.0.1-SNAPSHOT.jar

# # Expose the port that your Spring Boot application is running on
# EXPOSE 8080

# # Command to run your Spring Boot application
# CMD ["java", "-jar", "auth-0.0.1-SNAPSHOT.jar"]


FROM maven:3.8.5-openjdk-17 AS builder

ENV HOME=/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD . $HOME

RUN mvn clean package -X
