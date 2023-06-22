import React from 'react'
import LoginPage from './login'

describe('<LoginPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoginPage />)
  })
  it('shows an error message when an invalid email is entered', () => {
    cy.get('input[name=email]').type('not an email').blur();
    cy.contains('Please enter a valid email address');
  })

  it('shows an error message when an invalid password is entered', () => {
    cy.get('input[name=password]').type('short').blur();
    cy.contains('Password is required');
  })

  it('shows no error messages when valid inputs are entered', () => {
    cy.get('input[name=email]').type('email@example.com');
    cy.get('input[name=password]').type('validpassword');
    cy.get('button[type=submit]').click();
    cy.contains('Please enter a valid email address').should('not.exist');
    cy.contains('Password is required').should('not.exist');
  })
})