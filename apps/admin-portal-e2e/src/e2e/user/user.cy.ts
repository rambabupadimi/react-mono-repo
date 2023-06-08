describe('admin-portal: User component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=user--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to User!');
    });
});
