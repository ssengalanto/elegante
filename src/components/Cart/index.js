import React from 'react'
import styles from './cart.module.scss'
import CartEmpty from './CartEmpty'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import useCart from './hooks/useCart'

const Cart = () => {
  const {
    removeCartItem,
    cartDisplayData,
    cartQuantityOnChange,
    cartQuantityOnKeyDown,
    cartQuantityOnKeyPress,
    proceedToCheckoutHandler
  } = useCart()

  const sortCartId = items =>
    items.sort((a, b) => (a.cartId > b.cartId ? 1 : -1))

  let content
  if (cartDisplayData.length > 0) {
    content = (
      <>
        {sortCartId(cartDisplayData).map(cartItem => (
          <CartItems
            key={cartItem.cartId}
            cartItem={cartItem}
            removeCartItem={removeCartItem}
            cartQuantityOnChange={cartQuantityOnChange}
            cartQuantityOnKeyDown={cartQuantityOnKeyDown}
            cartQuantityOnKeyPress={cartQuantityOnKeyPress}
          />
        ))}

        <CartTotal proceedToCheckoutHandler={proceedToCheckoutHandler} />
      </>
    )
  } else {
    content = <CartEmpty />
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="fw-thin">Shopping </span>
          <span className="fw-regular">Cart</span>
        </h1>
        <div className={styles.separator} />
        {content}
      </div>
    </section>
  )
}

export default Cart
