describe ("Tickets", () => {
    beforeEach (() => cy.visit ("https://bit.ly/2XSuwCW"));
        
    it.only("Preencher todo o formulário e depois resetar", () =>{
        const a = "Carlos";
        const b = "Guillen";
        const fullname = `${a} ${b}`;     

        cy.get ("#first-name").type (a);
        cy.get ("#last-name").type (b);
        cy.get ("#email").type ("cpenha@ciandt.com");
        cy.get ("#ticket-quantity") .select ("3");
        cy.get ("#vip").check();
        cy.get ("#friend").check();
        cy.get ("#publication").check();
        cy.get ("#requests").type ("Vegetariano");
        cy.get (".agreement p").should (
        "contain", `I, ${fullname}, wish to buy 3 VIP tickets. I understand that all ticket sales are final.`);
        cy.get ("#agree").click();
        cy.get ("#signature").type (fullname);
        cy.get ("button[type='submit']").as ("submitButton").should ("not.be.disabled");
        cy.get ("button[type='reset']").click();
        cy.get ("@submitButton").should ("be.disabled");
        
        });
    });
