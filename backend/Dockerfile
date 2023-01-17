# define base docker image
FROM openjdk:11 as build
LABEL maintainer="devops"
RUN ls
ARG JAR_FILE=dev-ops/backend/target/devops-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
