describe ("Tickets", () => {
    beforeEach (() => cy.visit ("https://bit.ly/2XSuwCW"));
      
    it.only ("Preencher todos os campos obrigatorios", () => {
    const customer = {
        firstName: "Jorge",
        lastName: "Guillen",
        email: "jorgeguillen@teste.com.br"  
      };

    cy.fillMandatoriryFields (customer); 
    cy.get ("button[type='submit']").as ("submitButton").should ("not.be.disabled");
    cy.get ("#agree").uncheck();
    cy.get ("@submitButton").should ("be.disabled");

    });
});