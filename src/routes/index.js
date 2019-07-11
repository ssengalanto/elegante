import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Men from '../pages/Men'
import Orders from '../pages/Orders'
import PageNotFound from '../pages/PageNotFound'
import Reviews from '../pages/Reviews'
import Shop from '../pages/Shop'
import Wishlist from '../pages/Wishlist'
import Women from '../pages/Women'

const ShippingDelivery = lazy(() => import('../pages/ShippingDelivery'))
const SecurePayment = lazy(() => import('../pages/SecurePayment'))
const Support = lazy(() => import('../pages/Support'))
const Guarantee = lazy(() => import('../pages/Guarantee'))
const TermsConditions = lazy(() => import('../pages/TermsConditions'))
const FAQ = lazy(() => import('../pages/FAQ'))

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/shop" component={Shop} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart" component={Cart} />
      <Route path="/orders" component={Orders} />
      <Route path="/shipping-delivery" component={ShippingDelivery} />
      <Route path="/secure-payment" component={SecurePayment} />
      <Route path="/support" component={Support} />
      <Route path="/guarantee" component={Guarantee} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/faq" component={FAQ} />
      <Route component={PageNotFound} />
    </Switch>
  </>
)

export default Routes
