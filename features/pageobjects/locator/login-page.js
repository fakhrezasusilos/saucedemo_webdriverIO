class LoginPage {

  async username() { return $('#user-name'); }
  async password() { return $('#password'); }
  async loginButton() { return $('#login-button'); }
  async errorMessage() { return $('[data-test="error"]'); }

}
export default new LoginPage();
