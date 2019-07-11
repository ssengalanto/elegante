import React from 'react'
import { useSelector } from 'react-redux'
import ContentLoader from '../Shared/Loader/ContentLoader'
import useWishlist from './hooks/useWishlist'
import styles from './wishlist.module.scss'
import WishlistButtons from './WishlistButtons'
import WishlistEmpty from './WishlistEmpty'
import WishlistItems from './WishlistItems'
import WishlistNotAuthorized from './WishlistNotAuthorized'

const Wishlist = () => {
  const { authenticated } = useSelector(state => state.auth)
  const { wishlist, loading } = useSelector(state => state.wishlist)
  const {
    wishlistSizeOnChange,
    addWishlistItemToCartHandler,
    removeWishlistItemHandler,
    addAllWishlistToCartHandler
  } = useWishlist()

  const sortWishlistId = items => items.sort((a, b) => (a.id > b.id ? 1 : -1))

  let content
  if (authenticated) {
    if (loading) {
      content = <ContentLoader />
    } else if (wishlist.length > 0 && !loading) {
      content = (
        <>
          {sortWishlistId(wishlist).map(product => (
            <WishlistItems
              key={product.id}
              product={product}
              wishlistSizeOnChange={wishlistSizeOnChange}
              removeWishlistItemHandler={removeWishlistItemHandler}
              addWishlistItemToCartHandler={addWishlistItemToCartHandler}
            />
          ))}

          <WishlistButtons
            addAllWishlistToCartHandler={addAllWishlistToCartHandler}
          />
        </>
      )
    } else {
      content = !loading && <WishlistEmpty />
    }
  } else {
    content = <WishlistNotAuthorized />
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="fw-thin">My </span>
          <span className="fw-regular">Wishlist</span>
        </h1>
        <div className={styles.separator} />
        {content}
      </div>
    </section>
  )
}

export default Wishlist
