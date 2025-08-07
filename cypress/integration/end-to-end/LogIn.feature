Feature: Login Form
  Scenario: User navigates to dashboard page from login
    Given User opens the "/" page and device is "macbook-16"
    Then View renders a "div" displaying the text "Please, enter your credentials"
    When User types "demo" in the "web_user" input
    When User types "wrongpass" in the "login-password" input
    When User clicks on the button with id "login-button"
    Then View renders a "div" displaying the text "User or password are incorrect"
    Then User clears the content of the "login-password" input
    Then User clears the content of the "web_user" input
    When User types "demo" in the "web_user" input
    When User types "demo" in the "login-password" input
    When User clicks on the button with id "login-button"
    Then View renders a "div" displaying the text "Success, use routing to redirect!"
    Then User takes a screenshot called "login_sucess"