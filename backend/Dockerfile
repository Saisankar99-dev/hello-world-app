FROM openjdk:11-jre-slim

WORKDIR /app

# Copy the packaged jar file into the container
COPY target/hello-backend-1.0-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
