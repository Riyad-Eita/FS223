#!/bin/sh

docker-compose down
docker image prune -a --force
docker-compose up

# docker-compose down maven && docker image rm apprenticeshipreporter-maven &&  docker-compose up maven
