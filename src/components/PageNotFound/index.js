import PropTypes from 'prop-types'
import React from 'react'
import styles from './page-not-found.module.scss'
import PageNotFoundContent from './PageNotFoundContent'
import PageNotFoundFooter from './PageNotFoundFooter'
import PageNotFoundHeader from './PageNotFoundHeader'

const PageNotFound = ({ pathname }) => (
  <div className={styles.container}>
    <PageNotFoundHeader />
    <PageNotFoundContent pathname={pathname} />
    <PageNotFoundFooter />
  </div>
)

PageNotFound.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default PageNotFound
