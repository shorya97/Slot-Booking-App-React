/* eslint-disable no-undef */
describe('Form', () => {
    beforeEach(()=>{
        cy.visit('https://morning-river-28732.herokuapp.com/bookings')
    })

    it('Access Input',()=>{
        cy.get('validate')
            .type('random name')
            .should('have.value','random name')

         cy.get('.datepicker')
            // .get('datepicker-day-button')
            .click()

        cy.get('.timepicker')

        cy.get('.timepicker')
           

    })

    
});
