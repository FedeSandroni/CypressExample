Feature: Login Form
  Scenario: User navigates to dashboard page from login
    Given User opens the "/" page and device is "macbook-16"
    Then View renders a "p" displaying the text "¡Hola! Ingresá tu usuario y contraseña para iniciar sesión"
    When User types "federico" in the "web_user" input
    When User types "wrongpass" in the "login-password" input
    When User clicks on the "button" element with text "Ingresar"
    Then View renders a "div" displaying the text "Usuario y/o contraseña INVALIDO."
    Then User clears the content of the "login-password" input
    Then User clears the content of the "web_user" input
    When User types "federico" in the "web_user" input
    When User types "1234" in the "login-password" input
    When User clicks on the "button" element with text "Ingresar"
    Then URL includes "dashboard"