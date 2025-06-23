import { Given, When, Then } from '@cucumber/cucumber';
import Login from '../pageobjects/functionality/login.js';
import General from '../pageobjects/functionality/general.js';

Given('I am on the login page', async () => {
    await General.goToUrl();
});

When('I enter {string} as username', async (username) => {
    await Login.inputUsername(username);
});

When('I enter {string} as password', async (password) => {
    await Login.inputPassword(password);
});

When('I click on the login button', async () => {
    await Login.clickLoginButton();
});

Then('I should see an error message {string}', async (errorMessage) => {
    await Login.checkErrorMessage(errorMessage);
});
