FROM mhart/alpine-node

RUN apk add --update \
        openssh \
        curl \
        bash \
        git \
&& apk del build-base linux-headers pcre-dev openssl-dev \
&& rm -rf /var/cache/apk/* 

ADD ./ /app
WORKDIR /app

EXPOSE 3000
