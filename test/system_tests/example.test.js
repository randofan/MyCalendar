const {By, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver')

suite(function (env) {
  describe('First script', function () {
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

    it('First Selenium script', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();
      assert.equal("Web form", title);

      let textBox = await driver.findElement(By.name('my-text'));
      let submitButton = await driver.findElement(By.css('button'));

      await textBox.sendKeys('Selenium');
      await submitButton.click();

      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
      assert.equal("Received!", value);
    });
  });
}, { browsers: [Browser.CHROME]});