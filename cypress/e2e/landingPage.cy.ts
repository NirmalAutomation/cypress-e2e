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

    // it('Assert title in Landing Page', () => {
    //
    //     cy.get('#site-header').contains('Federal Policy Guidance').click()
    //         .then(() => {
    //             cy.get('h1').should('contain.text', 'Federal Policy Guidance');
    //         })
    //
    // })
})

//git push --set-upstream origin init
// npx cypress run --record --key 11233911-e9d2-4c22-b6ea-6fb6a49b5c25