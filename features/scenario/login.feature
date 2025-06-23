Feature: Login Feature

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "standard_user" as username
    And I enter "secret_sauce" as password
    And I click on the login button
    Then I should be redirected to the product page

  Scenario: Unsuccessful login with incorrect username
    Given I am on the login page
    When I enter "invalid_user" as username
    And I enter "secret_sauce" as password
    And I click on the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Unsuccessful login with incorrect password
    Given I am on the login page
    When I enter "standard_user" as username
    And I enter "wrong_password" as password
    And I click on the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Unsuccessful login with empty username
    Given I am on the login page
    When I enter "" as username
    And I enter "secret_sauce" as password
    And I click on the login button
    Then I should see an error message "Epic sadface: Username is required"

  Scenario: Unsuccessful login with empty password
    Given I am on the login page
    When I enter "standard_user" as username
    And I enter "" as password
    And I click on the login button
    Then I should see an error message "Epic sadface: Password is required"

  Scenario: Unsuccessful login with both username and password empty
    Given I am on the login page
    When I enter "" as username
    And I enter "" as password
    And I click on the login button
    Then I should see an error message "Epic sadface: Username is required"
