# define base docker image
FROM openjdk:11 as build
LABEL maintainer="devops"
ARG JAR_FILE=./target/devops-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
