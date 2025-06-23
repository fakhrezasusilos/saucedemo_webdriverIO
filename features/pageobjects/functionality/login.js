import LoginPage from "../locator/login-page.js";
import { elementClick, elementGetText, elementSetValue } from "../../helpers/element-action-utils.js"
import { assertElementText } from "../../helpers/assertions.js";

class Login {
  async inputUsername(username) {
    if (username === undefined) {
      username = "";
    }
    await elementSetValue(await LoginPage.username(), username);
  }

  async inputPassword(password) {
    if (password === undefined) {
      password = "";
    }
    await elementSetValue(await LoginPage.password(), password);
  }

  async clickLoginButton() {
    await elementClick(await LoginPage.loginButton());
  }
  async checkErrorMessage(errorMessage){
    assertElementText(await LoginPage.errorMessage(), errorMessage);
  }
}
export default new Login();
