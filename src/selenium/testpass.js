const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

const test_case = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("http://localhost:3000/login?");
  //   await driver.findElement(By.name("q")).sendKeys("hello world", Key.RETURN);
  await driver.findElement(By.name("login")).sendKeys("hien482");
  await driver
    .findElement(By.name("password"))
    .sendKeys("********", Key.RETURN);
  if (await driver.findElement(By.className("fortest")).isDisplayed()) {
    console.log("test  success");
  } else {
    console.log("test failed");
  }
  setInterval(() => {
    driver.quit();
  }, 10000);
};
test_case();
