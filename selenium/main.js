const sample = require('./sample.json');
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        //await test1(driver);
        //await test2(driver);
        //await test3(driver);
    } finally {
        console.log("All tests completed");
        await driver.quit();
    }
})();

/**
 *  Scenario 1 focus on login and password credentials. 
 *  
 *  Scenario 1 consist of: 
 *  - succesfull login 
 *  - correct mail, wrong password
 *  - wrong mail, correct password 
 *  - unallowed character for email
 *  - unallowed character for password
 *  - invalid email
 *  - short password  
 */

async function succesfulLogin(driver) {
    let email = sample[0].email;
    let password = sample[0].password;
    let phone = sample[0].phone_no;
    let address = sample[0].address;

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

        const button = await driver.findElement(By.name('login_button'));
        await button.click();
    } finally {
        console.log("Test 1 completed");
        await driver.quit();
    }
}

async function passwordIsFalse(driver) {
    let email = sample[1].email;
    let password = sample[1].password;
    let phone = sample[1].phone_no;
    let address = sample[1].address;

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

        const button = await driver.findElement(By.name('login_button'));
        await button.click();
    } finally {
        console.log("Test 2 completed");
        await driver.quit();
    }
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


async function typeWithAnimation(element, text) {
    const delay = 100; // Adjust the delay (in milliseconds) between each character
    for (const char of text) {
        await element.sendKeys(char);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
