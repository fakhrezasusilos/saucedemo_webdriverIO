class General {

  async goToUrl() {
    await browser.url("https://www.saucedemo.com/");
  }

}
export default new General();
