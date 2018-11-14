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

    cy.get("@departmentName").type("Configuration", { force: true });

    cy
      .get("button.ui.button")
      .contains("Set Location")
      .click({ force: true });

    //search and set location
    cy.get("input[name=search]").type('"15333 Lyric Radial"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click();
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Set Location")
      .click({ force: true });
    cy.get("a.ui.button").contains("15333 Lyric Radial");
    //remove location and put it back
    cy
      .get("a.ui.button")
      .contains("15333 Lyric Radial")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("15333 Lyric Radial")
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
    cy.get("a.ui.button").contains("15333 Lyric Radial");

    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Emilie"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Emilie,Ratke");
    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Lincoln"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Lincoln,Davis");
    cy
      .get("a.ui.button")
      .contains("Emilie,Ratke")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Emilie,Ratke")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Emilie"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Employee")
      .click({ force: true });
    cy.get("a.ui.button").contains("Emilie,Ratke");

    //save Department
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Department saved");
  });
});
