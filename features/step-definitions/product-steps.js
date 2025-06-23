import { Given, When, Then } from '@cucumber/cucumber';
import Product from '../pageobjects/functionality/product.js';

Then('I should be redirected to the product page', async () => {
    Product.pageTitle();
});
