## Prova 2 - S206

Esse repositório contém os testes de interface, bem como os testes de API realizados utilizando
as ferramentas Cypress e Postman, respectivamente.

Antes de tudo, se quiser testar localmente, clone o repositório, acesse a pasta e execute `npm install`.

### Testes no Cypress
O Spec se econtra no caminho `cypress/e2e/prova_s206.cy.js`, e para gerar o relatório basta executar:

```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

### Testes no Postman

O arquivo `json` que contém os testes se encontra em `postman/Prova_S206.postman.json postman`. Para
gerar o relatório, basta executar:

```bash
node_modules/.bin/newman run <SUA_COLLETION>.json -r htmlextra
```
