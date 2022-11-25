
describe('Тестирование staya', function () {
    
    it('Авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get("#__layout > div > div > section > div > div > article > button").click()
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('lina.filimonova.1999@mail.ru')
        cy.get('.auth-form > form > [type="password"]').type('Staya12345')
        cy.get('.auth-form__submit').click()
        cy.contains("Мои заказы")

         })

})
