describe('auth: Login component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=login--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Login!');
    });
});
