#!/bin/sh

git pull

docker-compose down
docker image prune -a --force
docker-compose up -d

# docker-compose down maven && docker image rm apprenticeshipreporter-maven &&  docker-compose up maven
