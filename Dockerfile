FROM mhart/alpine-node

RUN apk add --update \
    openssh make g++ \
    python \
    git

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --verbose

RUN mkdir -p /app
WORKDIR /app

RUN cp -a /tmp/node_modules .
RUN cp /tmp/package.json .

ADD ./src ./src
