describe('admin-portal: CustomSnackbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customsnackbar--primary&args=open:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomSnackbar!');
    });
});
