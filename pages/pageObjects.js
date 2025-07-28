

exports.pageobjects= class pageobjects
{
    constructor(page)
    {
       this.page=page;
       this.username=page.locator("//input[@id='email']")
       this.password=page.locator("//input[@id='pass']")
       this.Loginbtn=page.locator("//button[contains(text(),'Log in')]")
    }

    async goto()
    {
        this.page.goto('https://www.facebook.com')
    }

    async login(uname,password)
    {
       await this.username.fill(uname)
       await this.password.fill(password)
       await this.Loginbtn.click();

    }
}