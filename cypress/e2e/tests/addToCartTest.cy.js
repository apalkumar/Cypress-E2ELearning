import addToCart from "../../pages/addToCartPage"
const addToCartObj = new addToCart();
import LoginData from '../../fixtures/LoginData.json'
// import registerData from '../../fixtures/registerData.json'

describe("add to cart functionality", function(){

    before(() =>{
        // cy.login("apalkumar@gmail.com", "Paramount@123")
        cy.login(LoginData.UserEmail, LoginData.loginpassword)
    })

    it("add to cart page", function(){
        addToCartObj.openSearchPage();
        addToCartObj.enterproductName();
        addToCartObj.clickOnSearchButton();
        addToCartObj.verifytheMacBook();
        addToCartObj.clickOnAddtoCarthButton();
        addToCartObj.VerifySuccessMesssage();
    })
})