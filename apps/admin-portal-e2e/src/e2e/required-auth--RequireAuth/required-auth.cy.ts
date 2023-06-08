describe('admin-portal: RequireAuth component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=requireauth--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RequireAuth!');
    });
});
