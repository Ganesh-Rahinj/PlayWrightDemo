

const{test,expect}=require('@playwright/test')

test('data driven',async({page})=>{

   await page.goto('https://www.facebook.com/')

const datas=[
    
    {username:'user1',password:'pass1'},
    {username:'user2',password:'pass2'},
    {username:'user3',password:'pass3'},
    {username:'user4',password:'pass4'}
];


for(const data of datas)
{

   await page.goto('https://www.facebook.com/')
   const uname=data.username
   const pass=data.password


   await page.locator('#email').fill(uname)
   await page.locator('#pass').fill(pass)

   await page.locator("//button[contains(text(),'Log in')]").click()

}
})