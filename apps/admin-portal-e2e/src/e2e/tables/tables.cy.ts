describe('admin-portal: Tables component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tables--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Tables!');
    });
});
