
import {test,expect} from '@playwright/test';
import {readExcelData} from '../tests/ReadExcel.spec.js';
import {readExcel} from './ReadExcel.spec.js';
const reader=new readExcel();

test('datadriventest',async({page})=>{
const datas=await reader.readExcelData('data1.xlsx','Sheet1');
for(const data of datas)
{

   await page.goto('https://www.facebook.com/')
   const uname=data.username;
   const pass=data.password;


   await page.locator('#email').fill(uname)
   await page.locator('#pass').fill(pass)

   await page.locator("//button[contains(text(),'Log in')]").click()

}

})