
class addToCart{

    weblocators = {
        searchInput: () =>cy.get('.form-control.input-lg'),
        clickSearch: () =>cy.get('.btn.btn-default.btn-lg'),
        product: () => cy.get('img[title="iMac"]'),
        addToCart: "Add to Cart",
        SuccessMessage: () => cy.get('.alert.alert-success.alert-dismissible')
    }


    openSearchPage(){
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=product/search")
    }

    enterproductName(){
        this.weblocators.searchInput().type("Mac")
    }

    clickOnSearchButton(){
        this.weblocators.clickSearch().click()
    }

    verifytheMacBook(){
        this.weblocators.product().should('be.visible')
    }

    clickOnAddtoCarthButton(){
        // this.weblocators.addToCart().click()
        cy.contains(this.weblocators.addToCart).first().click()
    }

    VerifySuccessMesssage(){
        this.weblocators.SuccessMessage().should("have.text", " Success: You have added iMac to your shopping cart! ×")
    }
}

export default addToCart;