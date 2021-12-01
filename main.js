const puppeteer = require('puppeteer');
const express = require('express');
const cheerio = require('cheerio');

const app = express();

const args = [
    '--start-maximized',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080',
    '--auto-open-devtools-for-tabs',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--disable-translator',
    '--mute-audio',
    '--safebrowsing-disable-auto-update',
    '--disable-3d-apis',
    '--disable-breakpad',
    '--disable-cloud-import',
    '--disable-notifications',
    '--disable-speech-api',
    '--disable-suggestions-ui',
    '--disable-voice-input',
    '--disable-xss-auditor',
    '--single-process',
    '--headless'
  ];

app.get('/ping', (req, res) => {
    return res.status(200).send({puppeteerLocation: puppeteer.executablePath()});
});

app.get('/launch', async (req, res) => {
    let chrome;
    console.log('prelaunch');
    try {
        chrome = await puppeteer.launch({
            args: args
        });
        console.log('afterlaunch');
        const page = await chrome.newPage();
        console.log('new page');
        const stackoverflowPage = await page.goto('https://stackoverflow.com/questions/57714810/docker-nodealpine-12-how-to-install-chromium-73-in-dockerfile');
        console.log('after go to');
        const $ = cheerio.load(await stackoverflowPage.text());
        console.log($('.question-hyperlink').first().text());
    } catch(err) {
        console.error(err);
        await chrome.close();
    }
    await chrome.close();
    return res.status(200).send({status: 'done'});
});

app.listen(3333, () => console.log('server up'));