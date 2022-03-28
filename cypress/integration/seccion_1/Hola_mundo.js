
describe("Bienvenido al curso de Cypress sección 1", () => {

    it("Mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo")
        cy.wait(3000)
    })

    it("Segundo test -> Campo name", () => {
        cy.visit("https://demoqa.com/text-box ")

        cy.get("#userName").type("Federico Montagud")
        cy.wait(4000)
    })

})//Cierre de describe