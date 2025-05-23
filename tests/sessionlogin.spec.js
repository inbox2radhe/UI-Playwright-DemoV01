import {test, expect, browser} from '@playwright/test'

let token;
let loginStatus;
let browserContext;


test('sesion login test', async({browser})=>{


    const browserNewContext= await browser.newContext();
    const page = await browserNewContext.newPage();
    await page.goto()
    



})


