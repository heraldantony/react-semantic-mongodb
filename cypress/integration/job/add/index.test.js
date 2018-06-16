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

    cy.get("@jobTitle").type("Internal Factors Facilitator", { force: true });

    cy.get("input[name=minSalary]").as("minSalary");

    cy.get("@minSalary").type("53407", { force: true });

    cy.get("input[name=maxSalary]").as("maxSalary");

    cy.get("@maxSalary").type("8906", { force: true });

    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type(
        '"Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."',
        { force: true }
      );
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy
      .get("a.ui.button")
      .contains(
        "Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."
      );
    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Iure dolores beatae qui et beatae et sed."', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("a.ui.button").contains("Iure dolores beatae qui et beatae et sed.");
    cy
      .get("a.ui.button")
      .contains(
        "Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."
      )
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains(
        "Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."
      )
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Task")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type(
        '"Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."',
        { force: true }
      );
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Task")
      .click({ force: true });
    cy
      .get("a.ui.button")
      .contains(
        "Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio."
      );

    //save Job
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Job saved");
  });
});
