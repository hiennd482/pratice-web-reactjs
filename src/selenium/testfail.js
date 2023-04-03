const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

const test_case = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("http://localhost:3000/login?");
  //   await driver.findElement(By.name("q")).sendKeys("hello world", Key.RETURN);
  await driver.findElement(By.name("login")).sendKeys("");
  await driver
    .findElement(By.name("password"))
    .sendKeys("********", Key.RETURN);
  if (await driver.findElement(By.className("alert")).isDisplayed()) {
    console.log("test  successful");
  } else {
    console.log("test failed");
  }
  setInterval(() => {
    driver.quit();
  }, 10000);
};
test_case();
