/// <reference types="cypress" />

describe('Medicaid Gov Landing Page', () => {

  beforeEach(() => {
    cy.visit('https://www.medicaid.gov', {failOnStatusCode:false});
  })

  it('Renew your Medicaid or CHIP coverage', () => {
    cy.get("#homepage-hero").contains("PREPARE NOW").click()
        .then (() => {
          cy.url().should("include", "resources-for-states/coronavirus-disease-2019-covid-19/" +
              "unwinding-and-returning-regular-operations-after-covid-19/renew-your-medicaid-or-chip-coverage/index.html");

          cy.get('#select-state').select('Maryland');
    })
  })
})