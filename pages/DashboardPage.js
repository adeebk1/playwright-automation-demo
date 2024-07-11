// @ts-check
const { expect } = require('@playwright/test');
class DashboardPage {

constructor(page) {
    this.page = page;
    this.activeIssueBtn = page.locator("(//div[contains(@class,'appMenu')]//div//button)[3]");
    this.activeIssueBtn2 = page.locator("//*[text()='Active Issues']");
    this.severityChangeLogDropdown = page.locator("//h6[text()= 'Severity']");
    this.highSeverityChkBox = page.locator("(//input[@value='High'])[1]")
    this.activeIssueCount = page.locator("[class='css-2dl6fu-count']");
    this.applicationMenu = page.locator("(//a[contains(@class,'css-zcpua3-appMenuRawItem')])[2]");
    this.boxesCount =page.locator("//div[@role='row' and @aria-rowindex ='2']//div[@role='gridcell' and @aria-colindex=7]/div/span");

    
}
async clickOnActiveIssueBtn() {

    // await this.page.waitForLoadState("networkidle");
    await this.activeIssueBtn.hover();
    // await this.activeIssueBtn.click();
    await this.activeIssueBtn2.click();

}

async clickOnApplication() {

    // await this.page.waitForLoadState("networkidle");
    await this.applicationMenu.click();
    // await this.activeIssueBtn.click();

}

async countNumberOfboxes(){
    const spanloc = await this.boxesCount.all();

    //const divSelector = "//div[@role='row' and @aria-rowindex ='2']//div[@role='gridcell' and @aria-colindex=7]/div";

    //const spanCount =await this.page.$$eval(`${divSelector} span`, spans=>spans.length)
    console.log("Total number of boxes are :", spanloc.length)

}
async selectSeverityDropdown() {
    await this.severityChangeLogDropdown.click();
}
async clickOnHighSeverityCheckBox() {
    await this.highSeverityChkBox.click();
}
async getActiveIssueCount() {
   const currentActiveIssueCount = await this.activeIssueCount.textContent();
   console.log("------Current Active Issue: "+currentActiveIssueCount)
}

}
module.exports = { DashboardPage }