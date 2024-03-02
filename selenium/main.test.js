const { assert } = require('console');
const sample = require('./sample.json')
const { Builder, By, Browser, until } = require('selenium-webdriver');
const { func } = require('prop-types');


jest.setTimeout(2147483647)

describe('Login Input', () => {
    let driver;  

  // Set browser driver before all the tests.
  beforeAll(async () => {
    // jest.setTimeout(5000000)
    //let driver = await new Builder().forBrowser(Browser.CHROME).build();
    //await driver.navigate('http://localhost:3000');
  });

  // After all tests are closed, close the browser driver.
  afterAll(async () => {
    
  });

  test('Right mail and password', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:3000/');
    const emailField = await driver.findElement(By.name('email'));
    const passwordField = await driver.findElement(By.name('password'));

    expect(emailField !== null).toBeTruthy();
    expect(passwordField !== null).toBeTruthy();
    
    let email = sample[0].email;
    let password = sample[0].password;
    
    await typeWithAnimation(emailField, email);
    await typeWithAnimation(passwordField, password);
            
    const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
    button.click()

    await driver.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
        
    let currentUrl = await driver.getCurrentUrl();
    console.assert(currentUrl === 'http://localhost:3000/mainPage', `Expected URL to be 'http://localhost:3000/mainPage' but was '${currentUrl}`);


});

    test("Email Password Dont Match", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[1].email;
        let password = sample[1].password

        console.log(email, " ", password)

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await sleep(3)

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email or Password is false').toBeTruthy()
                })
            }
        )

    })

    test("Long Email More Than 50 characters - Long Password More Than 30 Characters", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[2].email;
        let password = sample[2].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email and Password is too long').toBeTruthy()
                })
            }
        )


    })

    test("Long Email More Than 50 characters", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[3].email;
        let password = sample[3].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email is too long').toBeTruthy()
                })
            }
        )

    })

    test("Long Password More Than 30 characters", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[4].email;
        let password = sample[4].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Password is too long').toBeTruthy()
                })
            }
        )


    })

    test("Empty Email", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[5].email;
        let password = sample[5].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email or Password cannot be empty').toBeTruthy()
                })
            }
        )

    })

    test("Empty Password", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[5].email;
        let password = sample[5].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email or Password cannot be empty').toBeTruthy()
                })
            }
        )

    })

    test("Empty Email Empty Password", async () => {

        const driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('http://localhost:3000/')

        const emailField = await driver.findElement(By.name('email'));
        const passwordField = await driver.findElement(By.name('password'));
        
        expect(emailField !== null).toBeTruthy();
        expect(passwordField !== null).toBeTruthy();

        let email = sample[6].email;
        let password = sample[6].password

        await typeWithAnimation(emailField, email);
        await typeWithAnimation(passwordField, password);

        const button = await driver.findElement(By.name('login_button')); // Replace 'button_name' with the name attribute of the button
        
        await button.click()

        await driver.switchTo().alert().then(
            function(alert) {
                alert.getText().then(function(alertText){
                    expect(alertText === 'Email or Password cannot be empty').toBeTruthy()
                })
            }
        )
    })




  // Additional tests...
});

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
  

async function typeWithAnimation(element, text) {
    const delay = 1; // Adjust the delay (in milliseconds) between each character
    for (const char of text) {
        await element.sendKeys(char);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}



describe('SQL injection', () => {

    test('SQL injection using no creditentials', async () => {
        let driver;
        try{
            driver = await new Builder().forBrowser(Browser.CHROME).build();
            await driver.get('http://localhost:3000/');
            const emailField = await driver.findElement(By.name('email'));
            const passwordField = await driver.findElement(By.name('password'));

            expect(emailField).not.toBeNull();
            expect(passwordField).not.toBeNull();
            let email = "' OR '1'='1'; DROP TABLE USERS; --"; //No Mail
            let password = "' OR '1'='1'; DROP TABLE USERS; --"; //No Password
            await emailField.sendKeys(email);
            await passwordField.sendKeys(password);
                    
            const button = await driver.findElement(By.name('login_button'));
            expect(button).not.toBeNull();
            await button.click()

            await driver.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
            
            // Get the current URL
            let currentUrl = await driver.getCurrentUrl();

            // Assert the current URL is the expected URL
            assert(currentUrl === 'http://localhost:3000/mainPage', `Expected URL not to be 'http://localhost:3000/mainPage' but was '${currentUrl}'`).not();
        }
        catch (error) {
            console.error('Test failed', error);
        } finally {
            if (driver) {
                await driver.quit(); // Ensure the driver is closed even if the test fails.
            }
        }
    });

    test('SQL injection using right creditentials', async () => {
        let driver;
        try{
            driver = await new Builder().forBrowser(Browser.CHROME).build();
            await driver.get('http://localhost:3000/');
            const emailField = await driver.findElement(By.name('email'));
            const passwordField = await driver.findElement(By.name('password'));

            expect(emailField).not.toBeNull();
            expect(passwordField).not.toBeNull();
            let email = "haluk.altunel@example.com' OR '1'='1'; DROP TABLE USERS; --"; //Right Mail
            let password = "password1' OR '1'='1'; DROP TABLE USERS; --"; //Right Password
            await emailField.sendKeys(email);
            await passwordField.sendKeys(password);
                    
            const button = await driver.findElement(By.name('login_button'));
            expect(button).not.toBeNull();
            await button.click()

            await driver.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
            
            // Get the current URL
            let currentUrl = await driver.getCurrentUrl();

            // Assert the current URL is the expected URL
            assert(currentUrl === 'http://localhost:3000/mainPage', `Expected URL not to be 'http://localhost:3000/mainPage' but was '${currentUrl}'`).not();
        }
        catch (error) {
            console.error('Test failed', error);
        } finally {
            if (driver) {
                await driver.quit(); // Ensure the driver is closed even if the test fails.
            }
        }
    });
    test('SQL injection using wrong creditentials', async () => {
        let driver;
        try{
            driver = await new Builder().forBrowser(Browser.CHROME).build();
            await driver.get('http://localhost:3000/');
            const emailField = await driver.findElement(By.name('email'));
            const passwordField = await driver.findElement(By.name('password'));

            expect(emailField).not.toBeNull();
            expect(passwordField).not.toBeNull();
            let email = "haluk.altunel@example.com' OR '1'='1'; DROP TABLE USERS; --"; //Right Mail
            let password = "password565' OR '1'='1'; DROP TABLE USERS; --"; //Wrong Password
            await emailField.sendKeys(email);
            await passwordField.sendKeys(password);
                    
            const button = await driver.findElement(By.name('login_button'));
            expect(button).not.toBeNull();
            await button.click()

            await driver.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
            
            // Get the current URL
            let currentUrl = await driver.getCurrentUrl();

            // Assert the current URL is the expected URL
            assert(currentUrl === 'http://localhost:3000/mainPage', `Expected URL not to be 'http://localhost:3000/mainPage' but was '${currentUrl}'`).not();
        }
        catch (error) {
            console.error('Test failed', error);
        } finally {
            if (driver) {
                await driver.quit(); // Ensure the driver is closed even if the test fails.
            }
        }
    });
    
});


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
        await emailField.sendKeys(email);

        const passwordField = await driver.findElement(By.name('password'));
        await passwordField.sendKeys(password);

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
        await emailField.sendKeys(email);

        const passwordField = await driver.findElement(By.name('password'));
        await passwordField.sendKeys(password);

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