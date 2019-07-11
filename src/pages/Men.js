/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Main from '../components/Shared/Main'
import Shop from '../components/Shop'
import Overview from '../components/Shop/ShopOverview'

const Men = ({ match, location, history }) => {
  useEffect(() => {
    if (location.pathname === match.url) {
      history.replace(`${match.url}/products`)
    }
  }, [location.pathname, history, match.url])
  return (
    <Main title="Men">
      <Route
        path={`${match.url}/products`}
        render={() => <Shop path={match.url} />}
      />
      <Route path={`${match.url}/product-overview/:id`} component={Overview} />
    </Main>
  )
}
export default Men
