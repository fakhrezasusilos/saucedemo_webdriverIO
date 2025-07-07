
# 🧪 SauceDemo Automation Testing with WebdriverIO + Cucumber

This project is an automated test suite for [SauceDemo](https://www.saucedemo.com/) using **WebdriverIO**, **Cucumber.js**, and the **Page Object Model (POM)** structure. It covers login scenarios with proper reporting and reusable components.

---

## 📁 Folder Structure

```
saucedemo_webdriverIO/
├── features/
│   ├── login.feature               # Gherkin scenarios
│   └── scenario/                   # Scenario-specific data (if needed)
├── step-definitions/
│   ├── login-steps.js             # Step definitions for login
│   └── product-steps.js           # Step definitions for product page
├── pageobjects/
│   ├── functionality/             # Functions used in steps
│   │   ├── login.js
│   │   └── product.js
│   ├── locator/                   # Page locators
│   │   ├── login-page.js
│   │   └── product-page.js
├── helpers/                       # Custom utility or assertion functions
│   ├── assertions.js
│   ├── element-actions-utils.js
│   └── general.js
├── report/                        # Cucumber HTML & JSON reports
│   ├── cucumber-report.html
│   └── cucumber-report.json
├── screenshots/                   # Failure screenshots (if implemented)
├── .env                           # Optional env config
├── wdio.conf.js                   # WebdriverIO configuration
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run Tests

```bash
npx wdio run wdio.conf.js
```

You can also target a specific feature file:

```bash
npx wdio run wdio.conf.js --spec features/login.feature
```

---

## 🧪 Sample Test Scenario

```gherkin
Scenario: Unsuccessful login with empty username
  Given I am on the login page
  When I enter "" as username
  And I enter "secret_sauce" as password
  And I click on the login button
  Then I should see an error message "Epic sadface: Username is required"
```

---

## 📊 Test Reporting

HTML and JSON reports are automatically generated in the `report/` directory.

To view the HTML report:

```bash
open report/cucumber-report.html
```

---

## ⚙️ Tech Stack

- WebdriverIO v8
- Cucumber.js
- Chai Assertions
- POM with reusable locators and functions
- ChromeDriver Service
- Cucumber HTML Reporter

---

## ✅ Test Coverage

- [x] Login with valid credentials
- [x] Login with empty username
- [x] Login with empty password
- [x] Login with both fields empty
- [ ] Product page & cart (coming soon)

---

## 📌 TODO

- [ ] Add more positive/negative tests for products and checkout
- [ ] CI integration (GitHub Actions)
- [ ] Screenshot on failure
- [ ] Allure reporting (optional)

---

## 👨‍💻 Author

**Fakhreza Akbar Susilo**  
🔗 [GitHub](https://github.com/fakhrezasusilos)

---

## 📄 License

This project is open-source under the MIT License.
