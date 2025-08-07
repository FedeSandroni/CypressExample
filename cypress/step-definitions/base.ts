import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(
  'User opens the {string} page and device is {string}',
  (path: string, device: Cypress.ViewportPreset) => {
    cy.viewport(device);
    cy.visit(path);
  },
);

When('User checks the checkbox with id {string}', (id: string) => {
  cy.get(`#${id}[role="checkbox"]`).click();
});

When('User clicks on the button with id {string}', (id: string) => {
  cy.get(`#${id}`).click();
});

When(
  'User types {string} in the {string} input',
  (text: string, input: string) => {
    cy.get(`input[id="${input}"]`).type(text);
  },
);

When(
  'User clears the content of the {string} input',
  (inputSelector: string) => {
    cy.get(`input[id="${inputSelector}"]`).clear();
  },
);

When(
  'User checks the input type checkbox with name {string}',
  (name: string) => {
    cy.get(`input[id="${name}"]`)
      .siblings('button[role="checkbox"]')
      .click({ force: true });
  },
);

Then('URL includes {string}', (path: string) => {
  cy.url().should('include', path);
});

Then(
  'View renders a {string} displaying the text {string}',
  (element: string, text: string) => {
    cy.get(element).contains(text);
  },
);

Then('User takes a screenshot called {string}', (screenshotName: string) => {
  cy.screenshot(screenshotName);
});
