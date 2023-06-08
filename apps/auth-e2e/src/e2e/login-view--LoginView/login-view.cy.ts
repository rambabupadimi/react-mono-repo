describe('auth: LoginView component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=loginview--primary&args=loginLoadingStatus;onLogin;error;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LoginView!');
    });
});
