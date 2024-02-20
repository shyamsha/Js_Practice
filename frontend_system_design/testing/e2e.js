const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // if true with out graphical user interface it will print output terminal
    slowMo: 100,
    args: ["--window-size= 1080,1000"],
  });
  const page = await browser.newPage();
  await page.goto("http://google.co.in");
  console.log("webpage loaded");
  await page.setViewport({ width: 1080, height: 1000 });

  // select selector and action implement read docs puppeteer
})();

// use con job run this script everyday at 8
