# QA Test - VR

Projeto desenvolvido como parte de um desafio técnico para validação de habilidades em testes automatizados de frontend e backend.

---

## Objetivo

Validar funcionalidades da loja VR através de:

* Testes automatizados de interface (E2E)
* Testes de API
* Testes de lógica com manipulação de strings

---

## Tecnologias Utilizadas

### Frontend (E2E)

* Cypress

### Backend (API + Lógica)

* Ruby
* Cucumber
* HTTParty
* RSpec

---

## Estrutura do Projeto

```
qa-test-vr/
│
├── frontend-cypress/
│   ├── cypress/
│   │   ├── e2e/
│   │   ├── pages/
│   │   └── support/
│
├── backend-cucumber/
│   ├── features/
│   │   ├── api.feature
│   │   ├── string.feature
│   │   ├── step_definitions/
│   │   └── support/
│
└── README.md
```

---

## Como Executar o Projeto

### Frontend (Cypress)

1. Acesse a pasta:

```
cd frontend-cypress
```

2. Instale as dependências:

```
npm install
```

3. Execute o Cypress:

```
npx cypress open
```

4. Execute o teste:

* `addToCart.cy.js`

---

### Backend (Cucumber)

1. Acesse a pasta:

```
cd backend-cucumber
```

2. Instale as dependências:

```
bundle install
```

3. Execute os testes:

```
bundle exec cucumber
```

---

## 🌐 Teste de API

Endpoint testado:

```
https://portal.vr.com.br/api-web/comum/enumerations/VRPAT
```

Validações realizadas:

* Status code 200
* Presença da chave `typeOfEstablishment`
* Retorno de valor aleatório da lista

---

## 🧠 Teste de Lógica (Strings)

Implementação de função para:

* Remover partes de uma string após determinados marcadores
* Cobertura com múltiplos cenários

---

## Boas Práticas Aplicadas

* Page Object Pattern (Cypress)
* Reutilização com Custom Commands
* Separação de responsabilidades
* Uso de dados dinâmicos
* Validações robustas com assertions

---

## Observações

* Em ambientes Windows, pode ser necessário ajustar encoding UTF-8 para execução do Cucumber
* Recomenda-se uso de Git Bash para evitar problemas de compatibilidade

---

## Autor

```
Nicolas Andrade - QA Sr 
```

Projeto desenvolvido para fins de avaliação técnica em QA.

---
