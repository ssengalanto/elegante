/* eslint-disable react/prop-types */
import React from 'react'
import PageNotFoundPage from '../components/PageNotFound'
import Main from '../components/Shared/Main'

const PageNotFound = ({ location }) => (
  <Main title="404 Error">
    <PageNotFoundPage pathname={location.pathname} />
  </Main>
)

export default PageNotFound
