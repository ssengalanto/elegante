import React from 'react'
import EmailIcon from '../SVGs/svg-icons/EmailIcon'
import LocationIcon from '../SVGs/svg-icons/LocationIcon'
import PhoneIcon from '../SVGs/svg-icons/PhoneIcon'
import styles from './contact.module.scss'

const ContactInfo = () => (
  <>
    <div className={styles.information}>
      <div className={styles['information-icon']}>
        <PhoneIcon />
      </div>
      <div className={styles['information-detail']}>517-712-5949</div>
    </div>
    <div className={styles.information}>
      <div className={styles['information-icon']}>
        <EmailIcon />
      </div>
      <div className={styles['information-detail']}>elegante@example.com</div>
    </div>
    <div className={styles.information}>
      <div className={styles['information-icon']}>
        <LocationIcon />
      </div>
      <div className={styles['information-detail']}>
        976 Haven Lane, MI 48933
      </div>
    </div>
  </>
)

export default ContactInfo
