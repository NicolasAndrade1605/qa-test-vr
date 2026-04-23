Cypress.Commands.add('acessarLoja', () => {
  cy.visit('/')
  cy.contains('Soluções VR').click()
})

Cypress.Commands.add('adicionarProdutoAuto', (quantidade, valor) => {
  cy.get('input').first().clear().type(quantidade)
  cy.get('input').eq(1).clear().type(valor)
  cy.contains('Adicionar ao carrinho').click()
})

Cypress.Commands.add('validarProdutoAdicionado', () => {
  cy.contains('Produto adicionado').should('be.visible')
})