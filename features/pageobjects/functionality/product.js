import ProductPage from '../locator/product-page.js';

import { assertBrowserUrl, assertElementText } from '../../helpers/assertions.js';
import { elementIsDisplayed } from '../../helpers/element-action-utils.js';

class Product {
  async pageTitle() {
    await elementIsDisplayed(await ProductPage.pageTitle());
    await driver.pause(3000);
    await assertElementText(await ProductPage.pageTitle(), "Products");
    await assertBrowserUrl("/inventory.html");
  }

  async addProductToCart(productName) {
    await elementScrollIntoClick(await ProductPage.inventoryItemName(productName));
    await elementScrollIntoClick(await ProductPage.addToCartButton(productName));
  }

  async removeProductFromCart(productName) {
    await elementScrollIntoClick(await ProductPage.inventoryItemName(productName));
    await elementScrollIntoClick(await ProductPage.addToCartButton(productName));
  }

}
export default new Product();
