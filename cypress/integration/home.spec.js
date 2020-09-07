/* eslint-disable no-undef */
describe('Home',function(){

    it('Search users by name and surname',function(){

        cy.visit('https://morning-river-28732.herokuapp.com/');
        cy.get('input[placeholder="Enter your search keyword"]')
            .type('emma')
        cy.get('a').contains('/3').click()
    });

});