


const sample = require('./sample.json')
const { Builder, By, Browser, until } = require('selenium-webdriver');

describe('Login Input', () => {
    let driver;  

  // Set browser driver before all the tests.
  beforeAll(async () => {
    // Default value is 'chrome'
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.navigate('http://localhost:3000/');
  });

  // After all tests are closed, close the browser driver.
  afterAll(async () => {
    await driver.close();
  });

  test('Right mail and password', async () => {
    const emailField = await driver.findElement(By.name('email'));
    const passwordField = await driver.findElement(By.name('password'));

    expect(emailField !== null).toBeTruthy();
    let email = "";
    let password = "";
    await typeWithAnimation(emailField, email);
    await typeWithAnimation(passwordField, password);
            
    const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
    button.click()
    
    await driver.quit()
    
    // Add assertions or further actions here
  });

  // Additional tests...
});

async function typeWithAnimation(element, text) {
    const delay = 100; // Adjust the delay (in milliseconds) between each character
    for (const char of text) {
        await element.sendKeys(char);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
/*
(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  let driver1 = await new Builder().forBrowser(Browser.FIREFOX).build();
  let driver2 = await new Builder().forBrowser(Browser.FIREFOX).build();  

  await test1(driver)
  await test2(driver1)
  await test3(driver2)
  
//   try {
//     await driver.get('http://localhost:3000/');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     console.log("SD")
//   }
})();

async function test1(driver){

    let email = sample[0].email
    let password = sample[0].password
    let phone = sample[0].phone_no
    let address = sample[0].address

    console.log(sample[0])

    try {
        await driver.get('http://localhost:3000/');
        const emailField = await driver.findElement(By.name('email'));
        await typeWithAnimation(emailField, email);

        const passwordField = await driver.findElement(By.name('password'));
        await typeWithAnimation(passwordField, password);

        const phoneField = await driver.findElement(By.name('phone'));
        await typeWithAnimation(phoneField, phone);

        const addressField = await driver.findElement(By.name('address'));
        await typeWithAnimation(addressField, address);
                
        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        button.click()
        
        await driver.quit()
    }

    finally{
        console.log("Tests Passed")

        const button = await driver.findElement(By.name('login_button'));
        await button.click();
    }


}

async function test2(driver){

    let email = sample[1].email
    let password = sample[1].password
    let phone = sample[1].phone_no
    let address = sample[1].address

    console.log(sample[0])

    try {
        await driver.get('http://localhost:3000/');
        const emailField = await driver.findElement(By.name('email'));
        await typeWithAnimation(emailField, email);

        const passwordField = await driver.findElement(By.name('password'));
        await typeWithAnimation(passwordField, password);

        const phoneField = await driver.findElement(By.name('phone'));
        await typeWithAnimation(phoneField, phone);

        const addressField = await driver.findElement(By.name('address'));
        await typeWithAnimation(addressField, address);
                
        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        button.click()
        await driver.quit()
    }
    catch(e){
        await driver.quit()
    }

    finally{
        console.log("Tests Passed")

        const button = await driver.findElement(By.name('login_button'));
        await button.click();
    } 
}

async function test3(driver){
    await driver.get('http://localhost:3000/');
    const button = await driver.findElement(By.name('google_button')); // Replace 'button_name' with the name attribute of the button
    button.click()
    
}
async function unallowedCharacterForEmail(driver) {
    try {
        await driver.get('http://localhost:3000/');
        const button = await driver.findElement(By.name('google_button'));
        await button.click();
    } finally {
        console.log("Test 3 completed");
        await driver.quit();
    }
}

async function unallowedCharacterForPassword(driver) {


}

async function invalidEmail(driver){


}

async function shortPassword(driver){

}


*/