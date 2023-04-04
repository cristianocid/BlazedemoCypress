describe('Buscar por voos', () => {
    
    context('Não Logado', () => {
        const massaVoos = require('../../fixtures/massaVoos')
        
        beforeEach(() => {
            cy.visit('/') // acessa a baseURL = Home dp Blazedemo
        })

        it('Buscar voos entre São Paolo e Cairo - Simples', () => {
            // verificar se esta na pagina correta
            cy.title().should('eq', 'BlazeDemo') // titulo da guia deve ser igual BlazeDemo
            
            cy.get('select.form-inline')
                .eq(0) // o primeiro elemento que tem esse css selector
                .select('São Paolo') // cidade de origem

            cy.get('select.form-inline')
                .eq(1) // o segundo elemento que tem esse css selector    
                .select('Cairo') // cidade de destino
                
            cy.get('input.btn.btn-primary')
                .click() // clica no botão selecionar voos

            // carregar a página seleção de voos
            
            // valida o titulo da guia e a frase de cabeçalho
            cy.title().should('eq', 'BlazeDemo - reserve')

            cy.get('.container h3').should('have.text', 'Flights from São Paolo to Cairo: ')   
        })

        massaVoos.array.forEach(({ origem, destino }) => {
            it(`Buscar voos entre ${origem} e ${destino} - Data Driven`, () => {
                // verificar se esta na pagina correta
                cy.title().should('eq', 'BlazeDemo') // titulo da guia deve ser igual BlazeDemo
                
                cy.get('select.form-inline')
                    .eq(0) // o primeiro elemento que tem esse css selector
                    .select(origem) // cidade de origem

                cy.get('select.form-inline')
                    .eq(1) // o segundo elemento que tem esse css selector    
                    .select(destino) // cidade de destino
                    
                cy.get('input.btn.btn-primary')
                    .click() // clica no botão selecionar voos

                // carregar a página seleção de voos
                
                // valida o titulo da guia e a frase de cabeçalho
                cy.title().should('eq', 'BlazeDemo - reserve')

                cy.get('.container h3').should('have.text', `Flights from ${origem} to ${destino}: `)
            })
        })      
    })
})