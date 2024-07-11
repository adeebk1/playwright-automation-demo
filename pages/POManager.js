
const { DashboardPage } = require('./DashboardPage');
const { LoginPage } = require('./loginpage');

class POManager {
    constructor(page, request) {
        this.page = page;
        this.request = request;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    getLoginPage() { return this.loginPage; }

    getDashboardPage() { return this.dashboardPage; }
}
module.exports = { POManager };