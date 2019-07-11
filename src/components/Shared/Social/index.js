import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import FacebookIcon from '../../SVGs/social-icons/FacebookIcon'
import InstagramIcon from '../../SVGs/social-icons/InstagramIcon'
import TwitterIcon from '../../SVGs/social-icons/TwitterIcon'
import YelpIcon from '../../SVGs/social-icons/YelpIcon'
import YoutubeIcon from '../../SVGs/social-icons/YoutubeIcon'
import styles from './social.module.scss'

const Social = forwardRef(({ className, tabKeyDownHandler }, ref) => (
  <nav className={styles.nav}>
    <a
      href="https://www.facebook.com/"
      rel="noopener noreferrer"
      target="_blank"
      className={styles['nav-link']}
      aria-label="facebook"
    >
      <FacebookIcon className={className} />
    </a>
    <a
      href="https://twitter.com/"
      rel="noopener noreferrer"
      target="_blank"
      className={styles['nav-link']}
      aria-label="twitter"
    >
      <TwitterIcon className={className} />
    </a>
    <a
      href="https://www.instagram.com/"
      rel="noopener noreferrer"
      target="_blank"
      className={styles['nav-link']}
      aria-label="instagram"
    >
      <InstagramIcon className={className} />
    </a>
    <a
      href="https://www.yelp.com/"
      rel="noopener noreferrer"
      target="_blank"
      className={styles['nav-link']}
      aria-label="yelp"
    >
      <YelpIcon className={className} />
    </a>
    <a
      href="https://www.youtube.com/"
      ref={ref}
      onKeyDown={tabKeyDownHandler}
      rel="noopener noreferrer"
      target="_blank"
      className={styles['nav-link']}
      aria-label="youtube"
    >
      <YoutubeIcon className={className} />
    </a>
  </nav>
))

Social.defaultProps = {
  className: styles['icon-default'],
  tabKeyDownHandler: undefined
}

Social.propTypes = {
  tabKeyDownHandler: PropTypes.func,
  className: PropTypes.string
}

export default Social
