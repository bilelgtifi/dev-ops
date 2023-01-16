# define base docker image
FROM openjdk:11
LABEL maintainer="devops"
ADD /var/lib/jenkins/workspace/test/backend/target/devops-0.0.1-SNAPSHOT.jar devops-springboot.jar
ENTRYPOINT ["java","-jar","devops-springboot.jar"]
