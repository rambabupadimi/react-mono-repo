describe('admin-portal: FormView component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formview--primary&args=data;saveData;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FormView!');
    });
});
