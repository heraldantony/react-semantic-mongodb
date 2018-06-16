// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  cy
    .request({
      method: "POST",
      url: "/api/v1/auth",
      body: {
        username,
        password
      }
    })
    .then(resp => {
      const hostname = window && window.location && window.location.hostname;
      //set the cookie since it doesn't seem to get set for localhost
      if (hostname === "localhost" || hostname === "127.0.0.1") {
        cy.setCookie("JWT_TOKEN", resp.body.token);
      }
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
