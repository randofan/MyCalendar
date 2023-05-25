const { By, Browser } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver')
const path = require('path')

suite(function (env) {
  describe('User Flow', function () {
    let driver;

    before(async function () {
      let opt = new chrome.Options();
      opt.addArguments("--load-extension=../src");
      opt.addArguments('--headless'); // Run Chrome in headless mode
      driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(opt)
        .build();
    });

    after(async () => await driver.quit());

    it('Load Extension', async function () {
      // Path to website html
      const absolutePath = path.resolve('ClassSchedule.html');

      // Have the driver navigate to page
      await driver.get(`file://${absolutePath}`);

      // The example here just checks to see if the title matches. There are some
      // more examples below on how to get other elements.
      // You'll have to do some Googling to figure out how to interact with the
      // chrome extension.
      let title = await driver.getTitle();
      assert.equal("Class Schedule", title);
    });
  });
}, { browsers: [Browser.CHROME] });