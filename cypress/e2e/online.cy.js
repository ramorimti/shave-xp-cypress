describe('app', () => {
  it('deve estar on line', () => {
    cy.visit('http://localhost:3000')
  })
})