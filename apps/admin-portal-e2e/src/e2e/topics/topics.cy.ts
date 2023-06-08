describe('admin-portal: Topics component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topics--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Topics!');
    });
});
