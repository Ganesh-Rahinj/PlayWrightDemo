//import {test} from '@playwright/test';

const{test,expect}= require('@playwright/test');

 test('capcture multiple links' ,async ({page}) => {

await page.goto('https://www.google.com');

const links= await page.$$('a');

for(const l of links)
{
   console.log(await l.getAttribute('href'));
   console.log(await l.textContent());
}

});