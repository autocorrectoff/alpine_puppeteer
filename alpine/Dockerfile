FROM node:16-alpine

RUN \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
  apk --no-cache  update \
  && apk --no-cache  upgrade \
  && apk add --no-cache --virtual .build-deps \
    udev ttf-opensans chromium \
    dumb-init \
  && rm -rf /var/cache/apk/* /tmp/* 

COPY . /app/

WORKDIR /app

ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN npm install --production

CMD ["dumb-init", "npm", "start"]