FROM node:22.14.0-alpine

WORKDIR /usr/src/app

RUN apk add --update --no-cache make

COPY package.json package-lock.json Makefile ./
RUN make setup

COPY src ./src

ENV PORT=3000
EXPOSE $PORT

RUN adduser -D app
USER app

CMD ["make", "start"]
