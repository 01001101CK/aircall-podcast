import React from 'react'
import LatestBlogsSection from './latest-blogs-section'

describe('<LatestBlogsSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LatestBlogsSection />)
  })
})