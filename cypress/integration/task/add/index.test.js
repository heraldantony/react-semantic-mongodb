describe("Task", () => {
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
  it("Should be able to add new Task", () => {
    cy.visit("/addTask");

    cy.get("input[name=title]").as("title");

    cy
      .get("@title")
      .invoke("width")
      .should("be.gt", 0);

    cy.get("@title").type("Sit aut dolores modi aut.", { force: true });

    cy.get("textarea[name=description]").as("description");

    cy
      .get("@description")
      .type(
        "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
        { force: true }
      );

    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Central Metrics Administrator"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Central Metrics Administrator");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Senior Solutions Administrator"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Senior Solutions Administrator");
    cy
      .get("a.ui.button")
      .contains("Central Metrics Administrator")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("Central Metrics Administrator")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"Central Metrics Administrator"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("Central Metrics Administrator");

    //save Task
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Task saved");
  });
});
