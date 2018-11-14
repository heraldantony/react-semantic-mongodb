describe("Employee", () => {
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
  it("Should be able to add new Employee", () => {
    cy.visit("/addEmployee");

    cy.get("input[name=firstName]").as("firstName");

    cy
      .get("@firstName")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@firstName").type("Trinity", { force: true });

    cy.get("input[name=lastName]").as("lastName");

    cy.get("@lastName").type("Funk", { force: true });

    cy.get("input[name=email]").as("email");

    cy.get("@email").type("Therese99@hotmail.com", { force: true });

    cy.get("input[name=phoneNumber]").as("phoneNumber");

    cy.get("@phoneNumber").type("219.777.3989 x405", { force: true });

    cy
      .get("div.form-group label[for=hireDate]")
      .next()
      .children("input")
      .first()
      .as("hireDate");

    cy.get("@hireDate").type("14/11/2018 10:17:11 am", { force: true });

    cy.get("input[name=salary]").as("salary");

    cy.get("@salary").type("18043", { force: true });

    cy.get("input[name=commissionPct]").as("commissionPct");

    cy.get("@commissionPct").type("72958", { force: true });

    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Legacy Division Technician"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Legacy Division Technician");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Dynamic Assurance Strategist"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Dynamic Assurance Strategist");
    cy
      .get("a.ui.button")
      .contains("Legacy Division Technician")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Legacy Division Technician")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Legacy Division Technician"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Legacy Division Technician");

    //save Employee
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Employee saved");
  });
});
