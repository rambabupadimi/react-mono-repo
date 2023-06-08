describe('admin-portal: DeleteUser component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=deleteuser--primary&args=isOpen:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DeleteUser!');
    });
});
