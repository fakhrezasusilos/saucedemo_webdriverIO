Feature: Buy Products on SauceDemo

  Background: 
    Given I am on the SauceDemo login page
    When I log in with valid credentials

  Scenario: Buy a single item
    Given I am on the product page
    When I select a product
    And I add the product to the cart
    And I proceed to checkout
    Then I should see the checkout page
    When I complete the purchase
    Then I should see a confirmation message

  Scenario: Buy multiple items
    Given I am on the product page
    When I select multiple products
    And I add the products to the cart
    And I proceed to checkout
    Then I should see the checkout page with all selected items
    When I complete the purchase
    Then I should see a confirmation message

  Scenario: Buy a product and remove it from the cart
    Given I am on the product page
    When I select a product
    And I add the product to the cart
    And I remove the product from the cart
    Then the cart should be empty

  Scenario: Attempt to buy without adding items to the cart
    Given I am on the product page
    When I proceed to checkout without adding items to the cart
    Then I should see an error message indicating the cart is empty

  Scenario: Buy with invalid payment information
    Given I am on the product page
    When I select a product
    And I add the product to the cart
    And I proceed to checkout
    And I enter invalid payment information
    Then I should see an error message regarding payment failure

  Scenario: Buy a product with discount code
    Given I am on the product page
    When I select a product
    And I add the product to the cart
    And I proceed to checkout
    And I enter a valid discount code
    Then the total price should reflect the discount
    When I complete the purchase
    Then I should see a confirmation message