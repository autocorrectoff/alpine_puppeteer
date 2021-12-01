docker build --platform linux/x86_64 -t chromium_slim -f slim/Dockerfile .

docker run --platform linux/x86_64 -p 3333:3333 --name chromium_slim_1 chromium_slim

/app/node_modules/puppeteer/.local-chromium/linux-901912/chrome-linux/chrome





docker build --platform linux/x86_64 --no-cache -t chromium_alpine -f alpine/Dockerfile .

docker run --platform linux/x86_64 -p 3334:3333 --name chromium_alpine_1 chromium_alpine

/app/node_modules/puppeteer/.local-chromium/linux-901912/chrome-linux/chrome



docker build --platform linux/x86_64 -t chromium_alpine_w -f alpine1/Dockerfile .

docker run --platform linux/x86_64 -p 3334:3333 --name chromium_alpine_w1 chromium_alpine_w