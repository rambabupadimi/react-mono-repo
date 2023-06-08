describe('admin-portal: Dashboard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashboard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Dashboard!');
    });
});
