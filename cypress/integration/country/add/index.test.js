describe("Country", () => {
  before(() => {
    // programmatically log us in without needing the UI

    cy.login("test", "test123");
  });
  beforeEach(function() {
    // before each test, we can automatically preserve the
    // 'JWT_TOKEN' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //

    // Cypress.Cookies.preserveOnce("JWT_TOKEN")
    Cypress.Cookies.defaults({
      whitelist: "JWT_TOKEN"
    });
  });
  it("Should be able to add new Country", () => {
    cy.visit("/addCountry");

    cy.get("input[name=countryName]").as("countryName");

    cy
      .get("@countryName")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@countryName").type("Grenada", { force: true });

    cy
      .get("button.ui.button")
      .contains("Set Region")
      .click({ force: true });

    //search and set region
    cy.get("input[name=search]").type('"Africa"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click();
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Region")
      .click({ force: true });
    cy.get("a.ui.button").contains("Africa");
    //remove region and put it back
    cy
      .get("a.ui.button")
      .contains("Africa")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Africa")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Set Region")
      .click({ force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Region")
      .click({ force: true });
    cy.get("a.ui.button").contains("Africa");

    //save Country
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Country saved");
  });
});
