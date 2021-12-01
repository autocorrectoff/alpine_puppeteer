FROM node:16-slim

ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN apt-get update && \
    apt-get install -y  git sudo chromium

COPY . /app/

WORKDIR /app

RUN npm install --production

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]

CMD ["npm", "start"]