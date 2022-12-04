/// <reference types="Cypress" />

import landingPage from "../pages/landingPage";

describe('Navigate to Landing Page', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/', {failOnStatusCode: false});

    })
    //
    // it('Verify the Main menu links', () => {
    //     const categories = new landingPage();
    //     categories
    //         .mainMenuLinks().eq(0)
    //         .should('contain.text', 'Categories');
    //
    //     categories
    //         .mainMenuLinks().eq(1)
    //         .should('contain.text', 'Deals');
    //
    //     categories
    //         .mainMenuLinks().eq(2)
    //         .click();
    // })

    it('Assert title in Landing Page', () => {

        cy.get('.unav-header__nav').contains('Plans').click();

    })
})

//git push --set-upstream origin init
// npx cypress run --record --key 11233911-e9d2-4c22-b6ea-6fb6a49b5c25