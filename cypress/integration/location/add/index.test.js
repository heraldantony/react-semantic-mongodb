describe("Location", () => {
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
  it("Should be able to add new Location", () => {
    cy.visit("/addLocation");

    cy.get("input[name=streetAddress]").as("streetAddress");

    cy
      .get("@streetAddress")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@streetAddress").type("0312 Alessandra Loop", { force: true });

    cy.get("input[name=postalCode]").as("postalCode");

    cy.get("@postalCode").type("97889-8410", { force: true });

    cy.get("input[name=city]").as("city");

    cy.get("@city").type("East Dejahbury", { force: true });

    cy.get("input[name=stateProvince]").as("stateProvince");

    cy.get("@stateProvince").type("Connecticut", { force: true });

    cy
      .get("button.ui.button")
      .contains("Set Country")
      .click({ force: true });

    //search and set country
    cy.get("input[name=search]").type('"Bahamas"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click();
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Country")
      .click({ force: true });
    cy.get("a.ui.button").contains("Bahamas");
    //remove country and put it back
    cy
      .get("a.ui.button")
      .contains("Bahamas")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Bahamas")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Set Country")
      .click({ force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Country")
      .click({ force: true });
    cy.get("a.ui.button").contains("Bahamas");

    //save Location
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Location saved");
  });
});
