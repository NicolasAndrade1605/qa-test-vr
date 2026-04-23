Feature: Validar API Validar

Scenario: Validar retorno da API
    Given que faço uma requisição GET na API VR
    Then o status da resposta deve ser 200
    And o JSON deve conter a chave "typeOfEstablishment"
    And imprimo um tipo de estabelecimento aleatório