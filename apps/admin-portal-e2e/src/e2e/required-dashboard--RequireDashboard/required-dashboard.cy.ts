describe('admin-portal: RequireDashboard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=requiredashboard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RequireDashboard!');
    });
});
