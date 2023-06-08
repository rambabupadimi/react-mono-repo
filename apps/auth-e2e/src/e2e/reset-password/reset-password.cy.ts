describe('auth: ResetPassword component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=resetpassword--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ResetPassword!');
    });
});
