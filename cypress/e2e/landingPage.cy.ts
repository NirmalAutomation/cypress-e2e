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

//git push --set-upstream origin init
// npx cypress run --record --key 11233911-e9d2-4c22-b6ea-6fb6a49b5c25

// For Mac
// docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.2.0 --browser chrome

// For Windows
//docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.2.0

// Docker
// docker build -t my-cypress-image:2.0 .
// docker run -it -v $PWD:/my-cypress-project -t my-cypress-image:2.0 cypress/e2e/*.cy.ts --browser chrome

// Docker Compose
// docker-compose up (To run all mentioned browser)
// docker-compose run e2e-chrome