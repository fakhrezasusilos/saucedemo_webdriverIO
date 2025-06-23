class ProductPage {
  async pageTitle() { return $('[data-test="title"]'); }
  async inventoryContainer() { return $('#inventory_container'); }
  async inventoryItem() { return $$('.inventory_item'); }
  async inventoryItemName() { return $$('.inventory_item_name'); }
  async inventoryItemPrice() { return $$('.inventory_item_price'); }
  async addToCartButton() { return $$('.btn_primary.btn_inventory'); }
  async cartIcon() { return $('.shopping_cart_link'); }
  async cartBadge() { return $('.shopping_cart_badge'); }
  async productSortContainer() { return $('.product_sort_container'); }
}
export default new ProductPage();
