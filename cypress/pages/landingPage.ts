/// <reference types="Cypress" />

class landingPage {

    mainMenuLinks() {
       return  cy.get('[data-test="@web/Header/MainMenuLink"]');
        //.contains('Categories').click();

    }
}

export default landingPage
