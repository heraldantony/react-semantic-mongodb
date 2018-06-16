describe("Signup", () => {
  it("Should be able to signup new user", () => {
    cy.visit("/signup");

    cy.get("input[name=username]").as("username");
    cy
      .get("@username")
      .invoke("width")
      .should("be.gt", 0);
    cy.get("@username").type("test1", { force: true });
    cy.get("input[name=email]").type("test1@test.test", { force: true });
    cy.get("input[name=password]").type(`test123{enter}`, { force: true });

    cy
      .get("div.header")
      .should("contain", "Your user registration was successful");
  });
  it("Should fail with this username already registered", () => {
    cy.visit("/signup");
    cy.get("input[name=username]").as("username");
    cy
      .get("@username")
      .invoke("width")
      .should("be.gt", 0);
    cy.get("@username").type("test1", { force: true });
    cy.get("input[name=email]").type("test1@test.test", { force: true });
    cy.get("input[name=password]").type(`test123{enter}`, { force: true });

    cy
      .get("div.content p")
      .should("contain", "User with this username is already registered.");
  });
});
