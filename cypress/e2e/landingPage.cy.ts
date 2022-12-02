describe('Navigate to Landing Page', () => {

    beforeEach(() => {

        cy.visit('/', {failOnStatusCode: false});

    })

    it('Assert title in Landing Page', () => {

        cy.wait(10000)
        cy.get('.nav-container').contains('Movies').click();

    })
})

//git push --set-upstream origin init