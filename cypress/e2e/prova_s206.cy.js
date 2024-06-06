const url = 'https://www.demoblaze.com/index.html';

describe('Cria alguns testes para a loja', () => {
  it('Cria uma nova conta com sucesso', () => {
    cy.visit(url);
    cy.get('#signin2').click();

    const [username, passwd] = createRandomUser();

    cy.get('#sign-username').click().type(username, { delay: 0 });
    cy.get('#sign-password').click().type(passwd, { delay: 0 });

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Sign up successful.');
    });
  })

  it('Não faz login para usuário que não existe', () => {
    cy.visit(url);

    cy.get('#login2').click();
    cy.get('#loginusername').click().type("wrong_user", { delay: 0 });
    cy.get('#loginpassword').click().type("wrong_password", { delay: 0 });

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.contains('User does not exist.');
    });
  });

  it('Adiciona telefone ao carrinho com sucesso', () => {
    cy.visit(url);
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Product added');
    });
  });
})

function createRandomUser() {
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();

    const username = hours + minutes + seconds + "Identification";
    const passwd = hours + minutes + seconds + "Secret";

    return [username, passwd];
}
