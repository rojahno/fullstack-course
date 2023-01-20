// https://docs.cypress.io/api/introduction/api.html

describe("form", () => {
  it("is validated", () => {
    cy.visit("/form");

    cy.get("#contact-form").within(() => {
      cy.log("**clicks the submit button**");
      cy.get("#submit-button").click().wait(1000);

      cy.log("**check for invalid input fields**");
      cy.get("input:invalid").should("have.length", 2);

      cy.log("**check for invalid textarea**");
      cy.get("textarea:invalid").should("have.length", 1);

      cy.log("**enter the name**");
      cy.get("#name").type("Ola Nordmann");

      cy.log("**clicks the submit button**");
      cy.get("#submit-button").click().wait(1000);

      cy.log("**check for invalid input fields**");
      cy.get("input:invalid").should("have.length", 1);

      cy.log("**enter a email**");
      cy.get("#email").type("testingemail@email.com");

      cy.log("**clicks the submit button**");
      cy.get("#submit-button").click().wait(1000);

      cy.log("**enter a message**");
      cy.get("#message").type("Very pleased with the service!");

      cy.log("**clicks the submit button**");
      cy.get("#submit-button").click().wait(2000);
    });
  });
});
