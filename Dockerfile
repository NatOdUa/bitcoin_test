FROM node:alpine

RUN set -xe \
 && apk add --update git openssh-client bash \
 && rm -rf /tmp/* /var/cache/apk/* \
 && chown -R node:node /home/node

USER node

WORKDIR /home/node

COPY ./package.json ./package.json
COPY ./bower.json ./bower.json

RUN set -xe \
 && mkdir -p ~/.ssh \
 && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config \
 && npm install
