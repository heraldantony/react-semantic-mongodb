describe("Region", () => {
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
  it("Should be able to add new Region", () => {
    cy.visit("/addRegion");

    cy.get("input[name=regionName]").as("regionName");

    cy
      .get("@regionName")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@regionName").type("South-east Asia", { force: true });

    //save Region
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Region saved");
  });
});
