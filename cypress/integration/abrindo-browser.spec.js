describe ("Tickets", () => {
    beforeEach (() => cy.visit ("https://bit.ly/2XSuwCW"));
        
    it.only("Preenchendo todos os campos de digitação", () =>{
        cy.get ("#first-name").type ("Carlos");
        cy.get ("#last-name").type ("Guillen");
        cy.get ("#email").type ("cpenha@ciandt.com");
        cy.get ("#requests").type ("Vegetariano");
        cy.get ("#signature").type ("Carlos Penha Guillen");
    });

     it ("has 'TICKETBOX' header's heading", () => {});
});