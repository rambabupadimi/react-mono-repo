describe('auth: ForgotPassword component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=forgotpassword--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ForgotPassword!');
    });
});
