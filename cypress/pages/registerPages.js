// import cypress from "cypress"

class registerPages{

    weblocators = {
        
        // firstName:'#input-firstname',
        // lastName:'#input-lastname',
        // eMail:'#input-email',
        // telePhone:'#input-telephone',
        // passWord:'#input-password',
        // confirmPassword:'#input-confirm',
        // policyCheckbox:'input[type="checkbox"]',
        // continue:'.btn.btn-primary'

        firstName: () =>cy.get('#input-firstname'),
        lastName: () =>cy.get('#input-lastname'),
        eMail: () =>cy.get('#input-email'),
        telePhone: () =>cy.get('#input-telephone'),
        passWord: () =>cy.get('#input-password'),
        confirmPassword: () =>cy.get('#input-confirm'),
        policyCheckbox: () =>cy.get('input[type="checkbox"]'),
        continue: () =>cy.get('.btn.btn-primary'),
    }


    openUrl(){
        cy.visit(Cypress.env('URL'))
        // cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    }


    enterFirstName(FName){
        // cy.get("#input-firstname").type(FName)
        this.weblocators.firstName().clear();
        this.weblocators.firstName().type(FName)
    }
    
    enterLastName(LName){
        // cy.get(this.weblocators.enterLastName).type(LName)
        // cy.get("#input-lastname").type(LName)
        this.weblocators.lastName().clear();
        this.weblocators.lastName().type(LName)
    }

    enterEmail(EMAIL){
        // cy.get(this.weblocators.eMail).type(EMAIL)
        // cy.get("#input-email").type(EMAIL)
        this.weblocators.eMail().clear();
        this.weblocators.eMail().type(EMAIL)
    }

    enterTelephone(TNumebr){
        // cy.get(this.weblocators.telePhone).type(TNumebr)
        // cy.get("#input-telephone").type(TNumebr)
        this.weblocators.telePhone().clear();
        this.weblocators.telePhone().type(TNumebr)
    }

    enterPassword(pwd){
        // cy.get(this.weblocators.passWord).type(pwd)
        // cy.get(this.weblocators.confirmPassword).type(pwd)
        // cy.get("#input-password").type(pwd)
        // cy.get("#input-confirm").type(pwd)
        this.weblocators.passWord().clear();
        this.weblocators.passWord().type(pwd)
        this.weblocators.confirmPassword().clear();
        this.weblocators.confirmPassword().type(pwd)
    }

    selectPolicycheckbox(){
        // cy.get(this.weblocators.policyCheckbox).check()
        // cy.get("input[type='checkbox']").check()
        this.weblocators.policyCheckbox().check()

    }

    clickonButton(){
        // cy.get(this.weblocators.continue).click()
        // cy.get(".btn.btn-primary").click()
        this.weblocators.continue().click()
    }
    
}

export default registerPages;