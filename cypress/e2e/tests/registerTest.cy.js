import registerPages from "../../pages/registerPages"
const registerObj = new registerPages()
import registerData from '../../fixtures/registerData.json'

describe('test automation', function(){
    it('register flow', function(){
        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.Email)
        registerObj.enterTelephone(registerData.Telephone)
        registerObj.enterPassword(registerData.pwd)
        registerObj.selectPolicycheckbox()
        registerObj.clickonButton()
    })
})