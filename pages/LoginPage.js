// @ts-check
const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginbtn = page.locator('(//button[@type="button"])[2]');
    this.usernameField = page.locator("input#username");
    this.continuebtn = page.locator('button[name="action"]');
    this.password = page.locator("input#password");
  }
  async navigateToUrl(url) {
    await this.page.goto(url);
  }
  async validateLogin(username, password) {
    await this.loginbtn.click();
    await this.usernameField.fill(username);
    await this.continuebtn.click();
    await this.password.fill(password);
    await this.continuebtn.click();
  }

  async waitForSomeTime(timeInSeconds) {
    console.log("Additional Wait for " + timeInSeconds + " seconds.");
    await new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
  }
}
module.exports = { LoginPage };
