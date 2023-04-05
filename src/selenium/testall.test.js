const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");
describe("webdriver", () => {
  let driver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/login?");
    // driver = await new Builder().forBrowser("chrome").build();
  }, 10000);

  test("ui", async () => {
    const title = await driver.findElement(By.name("ll")).getText();
    expect(title).toContain("Login");
  });
  test("check error", async () => {
    const username = await driver.findElement(By.name("login")).sendKeys("");
    await driver
      .findElement(By.name("password"))
      .sendKeys("********", Key.RETURN);

    expect(username).toBe(null);
  });
  test("check navigate", async () => {
    // await driver.get("http://localhost:3000/login?");
    const navi = await driver.findElement(By.name("login")).sendKeys("hien482");
    await driver
      .findElement(By.xpath(`//*[@id="root"]/div/div/div/div[2]/form/input[2]`))
      .sendKeys("********", Key.RETURN);

    // const checkEl = await driver.findElement(By.className("fortest"));

    expect(navi).toBeInTheDocument();
  });
  setInterval(() => {
    driver.quit();
  }, 10000);
  // afterAll(async () => {
  //   await driver.quit();
  // }, 10000);
});
// const test_case = async () => {

//   await driver.get("http://localhost:3000/login?");
//   //   await driver.findElement(By.name("q")).sendKeys("hello world", Key.RETURN);
//   await driver.findElement(By.name("login")).sendKeys("hien482");
//   await driver
//     .findElement(By.name("password"))
//     .sendKeys("********", Key.RETURN);
//   if (await driver.findElement(By.className("fortest")).isDisplayed()) {
//     console.log("test  success");
//   } else {
//     console.log("test failed");
//   }
//   setInterval(() => {
//     driver.quit();
//   }, 10000);
// };
// test_case();
