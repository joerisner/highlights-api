ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

RUN apk add --update --no-cache make

COPY package.json package-lock.json Makefile ./

RUN make setup

COPY . .

EXPOSE 3000

CMD ["make", "start"]
