
describe('skills', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/skills', { fixture: 'skills.json' })
    cy.visit('http://localhost:4200/skills/');
  });

  describe('Skill Items', () => {
    it('Shows 2 rows by default', () => {
      cy.get('.skillsrow').should('have.length', 3);
    });

    it('Shows 3 rows when ShowAll is clicked', () => {
      cy.get('#mat-mdc-slide-toggle-1-button').click({ force: true });
      cy.get('.skillsrow').should('have.length', 2);
    });

    it('Shows the correct complete count  when complete is toogled', () => {
      cy.get('#mat-mdc-slide-toggle-2-button').click({ force: true });
      cy.get('#todo').should('contain.text', '3');
    });
  })
})