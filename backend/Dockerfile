
FROM maven:3.8.5-openjdk-17 as build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-ea-3-jdk-oraclelinux7
WORKDIR /app
COPY --from=build ./app/target/*.jar ./app.jar

ARG CLIENT_ID=myclientid
ARG CLIENT_SECRET=myclientsecret
ARG JWT_SECRET=myjwtsecret
ARG JWT_DURATION=86400

ARG DB_IP
ARG DB_PORT
ARG DB_NAME
ARG DB_PASSWORD

ENTRYPOINT java -jar -Dspring.profiles.active=dev app.jar