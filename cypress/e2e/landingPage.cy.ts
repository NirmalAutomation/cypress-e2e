/// <reference types="Cypress" />

describe('Navigate to Landing Page', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/' ,{failOnStatusCode: false});

    })

    it('Assert title', () => {
        cy.get('[data-test="@web/Header/MainMenuLink"]')
            .contains('Categories').click();
    })

})
