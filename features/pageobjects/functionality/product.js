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

}
export default new Product();
