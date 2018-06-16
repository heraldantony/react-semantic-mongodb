describe("Department", () => {
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
  it("Should be able to add new Department", () => {
    cy.visit("/addDepartment");

    cy.get("input[name=departmentName]").as("departmentName");

    cy
      .get("@departmentName")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@departmentName").type("Optimization", { force: true });

    cy
      .get("button.ui.button")
      .contains("Set Location")
      .click({ force: true });

    //search and set location
    cy
      .get("input[name=search]")
      .type('"718 Mayert Crossroad"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click();
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Location")
      .click({ force: true });
    cy.get("a.ui.button").contains("718 Mayert Crossroad");
    //remove location and put it back
    cy
      .get("a.ui.button")
      .contains("718 Mayert Crossroad")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("718 Mayert Crossroad")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Set Location")
      .click({ force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Location")
      .click({ force: true });
    cy.get("a.ui.button").contains("718 Mayert Crossroad");

    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Hattie"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Hattie,Gusikowski");
    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Carissa"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Carissa,Barrows");
    cy
      .get("a.ui.button")
      .contains("Hattie,Gusikowski")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Hattie,Gusikowski")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Hattie"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Hattie,Gusikowski");

    //save Department
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Department saved");
  });
});
