describe("Job", () => {
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
  it("Should be able to add new Job", () => {
    cy.visit("/addJob");

    cy.get("input[name=jobTitle]").as("jobTitle");

    cy
      .get("@jobTitle")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@jobTitle").type("Product Brand Architect", { force: true });

    cy.get("input[name=minSalary]").as("minSalary");

    cy.get("@minSalary").type("89948", { force: true });

    cy.get("input[name=maxSalary]").as("maxSalary");

    cy.get("@maxSalary").type("69568", { force: true });

    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Quis minima asperiores ipsam vitae."', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("a.ui.button").contains("Quis minima asperiores ipsam vitae.");
    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy.get("input[name=search]").type('"Omnis aliquam non."', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("a.ui.button").contains("Omnis aliquam non.");
    cy
      .get("a.ui.button")
      .contains("Quis minima asperiores ipsam vitae.")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Quis minima asperiores ipsam vitae.")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Quis minima asperiores ipsam vitae."', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("a.ui.button").contains("Quis minima asperiores ipsam vitae.");

    //save Job
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Job saved");
  });
});
