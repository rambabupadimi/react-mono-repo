describe('admin-portal: UserDetails component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userdetails--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UserDetails!');
    });
});
