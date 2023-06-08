describe('admin-portal: AddUser component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=adduser--primary&args=isOpen:false;type;data;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AddUser!');
    });
});
