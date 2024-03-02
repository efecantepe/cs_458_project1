const { assert } = require('console');
const sample = require('./sample.json')
const { Builder, By, Browser, until, Options } = require('selenium-webdriver');
const { func } = require('prop-types');
const chrome = require('selenium-webdriver/chrome');
const { UserPromptHandler } = require('selenium-webdriver/lib/capabilities');


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
    let options;
    beforeAll(async () => {
        options = new chrome.Options();
        // Set the behavior to ignore unexpected alerts
        options.setAlertBehavior(UserPromptHandler.DISMISS);
        options.addArguments('disable-infobars');
        options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 2 });
    });

    test('SQL injection for creating a new user without any creditentials', async () => {
        let driver;
        let driver2
        try{
            driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
            await driver.get('http://localhost:3000/');
            const emailField = await driver.findElement(By.name('email'));
            const passwordField = await driver.findElement(By.name('password'));

            expect(emailField).not.toBeNull();
            expect(passwordField).not.toBeNull();
            const fakePassword = generateRandomPassword(3);
            const fakeEmail = generateRandomEmail(3);
            const fakeAddr = generateRandomString(2);
            let email = "' OR '1'='1'; INSERT INTO USERS (password, email, phone_no, address) VALUES ('"+fakePassword+"', '"+fakeEmail+"', '1', '"+fakeAddr+"'); --"; //No Mail
            let password = "' OR '1'='1; --"; //No Password
            await emailField.sendKeys(email);
            await passwordField.sendKeys(password);
                    
            const button = await driver.findElement(By.name('login_button'));
            expect(button).not.toBeNull();
            await button.click();
            
            //If injection worked, then the user with random genarated user will be in the db.
            driver2 = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
            await driver2.get('http://localhost:3000/');
            const emailField2 = await driver2.findElement(By.name('email'));
            const passwordField2 = await driver2.findElement(By.name('password'));
            await emailField2.sendKeys(fakeEmail);
            await passwordField2.sendKeys(fakePassword);
            const button2 = await driver2.findElement(By.name('login_button'));
            expect(button2).not.toBeNull();
            await button2.click();
            await driver2.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
            let currentUrl = await driver2.getCurrentUrl();
            expect(currentUrl === 'http://localhost:3000/mainPage').toBeFalsy();
        }
        catch (error) {
            console.error('Test failed', error);
        } finally {
            if (driver) {
                await driver.quit(); // Ensure the driver is closed even if the test fails.
            }
            if(driver2){
                await driver2.quit()
            }
        }
    });

    test('SQL injection DROP TABLES using right creditentials', async () => {
        let driver;
        let driver2;
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

            driver2 = await new Builder().forBrowser(Browser.CHROME).build();
            await driver2.get('http://localhost:3000/');
            const emailField2 = await driver2.findElement(By.name('email'));
            const passwordField2 = await driver2.findElement(By.name('password'));
            await emailField2.sendKeys("haluk.altunel@example.com");
            await passwordField2.sendKeys("password1");
            const button2 = await driver2.findElement(By.name('login_button'));
            expect(button2).not.toBeNull();
            await button2.click();
            await driver2.wait(until.urlIs('http://localhost:3000/mainPage'), 10000);
            let currentUrl = await driver2.getCurrentUrl();
            expect(currentUrl === 'http://localhost:3000/mainPage').toBeTruthy();
        }
        catch (error) {
            console.error('Test failed', error);
        } finally {
            if (driver) {
                await driver.quit(); // Ensure the driver is closed even if the test fails.
            }
            if(driver2){
                await driver2.quit()
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

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function generateRandomEmail(bodyLength) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let emailBody = "";
    for (let i = 0; i < bodyLength; i++) {
        emailBody += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return emailBody + "@example.com";
}

function generateRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return randomString;
}