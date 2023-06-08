describe('admin-portal: UserListItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userlistitem--primary&args=user;userClick;editButtonClick;deleteButtonClick;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UserListItem!');
    });
});
