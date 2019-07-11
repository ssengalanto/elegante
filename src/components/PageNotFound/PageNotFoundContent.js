import PropTypes from 'prop-types'
import React from 'react'
import useReactRouter from 'use-react-router'
import styles from './page-not-found.module.scss'

const PageNotFoundContent = ({ pathname }) => {
  const { history } = useReactRouter()

  const homePageHandler = () => {
    history.push('/')
  }
  const prevPageHandler = () => {
    history.goBack()
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.error}>404</h1>
      <p className={styles['error-text']}>Whoops... {pathname} is not found!</p>
      <div className={styles['btn-container']}>
        <button type="button" className="btn--dark" onClick={homePageHandler}>
          Home Page
        </button>
        <button
          type="button"
          className={`btn--dark ${styles['btn-spacing']}`}
          onClick={prevPageHandler}
        >
          Previous Page
        </button>
      </div>
    </div>
  )
}

PageNotFoundContent.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default PageNotFoundContent
