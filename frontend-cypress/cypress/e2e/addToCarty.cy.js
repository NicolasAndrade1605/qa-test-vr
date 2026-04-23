import storePage from '../pages/storePage'

describe('Adicionar produto ao carrinho', () => {

  it('Deve adicionar cartão Auto com sucesso', () => {

    const quantidade = 5
    const valor = 50000

    cy.acessarLoja()

    storePage.selecionarCartaoAuto()
    storePage.adicionarAoCarrinho(quantidade, valor)

    cy.wait(2000)

    storePage.finalizarContratacao()

    storePage.validarProdutoAdicionado()

  })

})