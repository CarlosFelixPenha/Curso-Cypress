describe ("Tickets", () => {
    beforeEach (() => cy.visit ("https://bit.ly/2XSuwCW"));
        
    it.only("Preenchendo todos os campos de digitação", () =>{
        const a = "Carlos";
        const b = "Guillen";
        const Fullname = `${a} ${b}`;
        cy.get ("#first-name").type (a);
        cy.get ("#last-name").type (b);
        cy.get ("#email").type ("cpenha@ciandt.com");
        cy.get ("#requests").type ("Vegetariano");
        cy.get ("#signature").type (Fullname);
    });

    it("Selecione a opção 2", () => {
        cy.get ("#ticket-quantity") .select ("3");
    });

    it("Selecione a opção VIP", () => {
        cy.get ("#vip").check();
    });

    it("Selecione a opção 'Midia Social'", () => {
        cy.get ("#social-media").check();
    });

    it ("Selecione a opção 'Amigo' e 'Publicação' depois desmarcar a opção 'Amigo' ", () => {
        cy.get ("#friend").check();
        cy.get ("#publication").check();
        cy.get ("#friend").uncheck();
    });

     it("Validar o texto 'TICKETBOX' na tela de Home", () => {
        cy.get ("header h1").should ("contain", "TICKETBOX");
     });

     it("Validar campo para email invalido", () => {
        cy.get ("#email").type ("carlos-teste.com");
        cy.get ("#email.invalid").should ("exist");
     });

     it("Validar email invalido e depois adicionar um email valido", () => {
        cy.get ("#email").type ("carlos-teste.com");
        cy.get ("#email.invalid").should ("exist");
        cy.get ("#email").clear().type ("carlos@teste.com");
        cy.get ("#email.invalid").should ("not.exist");
     });
});