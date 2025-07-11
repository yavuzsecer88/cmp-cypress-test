describe("Testing consent banner", function () {


  it("dummy test", function () {
    cy.on("uncaught:exception", () => false);

    cy.visit(Cypress.env("BASE_URL") + "/?cmpscreen");

  });
});
