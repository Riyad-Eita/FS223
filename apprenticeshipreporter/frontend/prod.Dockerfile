FROM node:18-alpine

WORKDIR /app

COPY . .

COPY app ./app
COPY components ./components
COPY hooks ./hooks
COPY images ./images
COPY lib ./lib
COPY public ./public

RUN npm cache clean --force

RUN npm i

RUN npm run build

CMD npm run start
