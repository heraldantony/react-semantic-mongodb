describe("Login", () => {
  it("Should be able to login", () => {
    cy.visit("/auth");

    cy.get("input[name=username]").as("username");
    cy
      .get("@username")
      .invoke("width")
      .should("be.gt", 0);
    cy.get("@username").type("test", { force: true });
    cy.get("input[name=password]").type(`test123{enter}`, { force: true });

    cy.get("header").should("contain", "Dashboard");
  });
  it("Should fail to login with invalid credentials", () => {
    cy.visit("/auth");

    cy.get("input[name=username]").as("username");
    cy
      .get("@username")
      .invoke("width")
      .should("be.gt", 0);
    cy.get("@username").type("test", { force: true });
    cy.get("input[name=password]").type(`test12345{enter}`, { force: true });

    cy.get("div.content p").should("contain", "Invalid credentials");
  });
});
