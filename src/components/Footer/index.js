import React from 'react'
import Social from '../Shared/Social'
import styles from './footer.module.scss'
import FooterDisclaimer from './FooterDisclaimer'
import FooterPrimaryNav from './FooterPrimaryNav'
import FooterSecondaryNav from './FooterSecondaryNav'
import FooterTertiaryNav from './FooterTertiaryNav'

const Footer = () => (
  <footer className={styles.section}>
    <div className={styles.content}>
      <div className={styles.column}>
        <div className={styles['column-title']}>Elegante</div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Social />
      </div>
      <FooterPrimaryNav />
      <FooterSecondaryNav />
      <FooterTertiaryNav />
    </div>
    <FooterDisclaimer />
  </footer>
)

export default Footer
