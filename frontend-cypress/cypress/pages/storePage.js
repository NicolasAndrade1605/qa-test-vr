class StorePage {

  selecionarCartaoAuto() {
    cy.get('[data-testid="adicionar-produto-28"] > .ds-c-PJLV').click()
  }

  adicionarAoCarrinho(quantidade, valor) {
    cy.get('[data-testid="ui-text-input"]').eq(0)
    .clear()
    .type(quantidade.toString())

    cy.get('[data-testid="ui-text-input"]').eq(1)
    .clear()
    .type(valor.toString())
  }

  finalizarContratacao() {
    cy.get('#carrinho-seguir-para-a-compra').click()
  }

  validarProdutoAdicionado() {
    cy.contains('Para começar').should('be.visible')
  }
}

export default new StorePage()