import React from 'react'
import newArrivalImg from '../../../assets/images/homepage/new-arrivals.jpg'
import content from '../../../utilities/content/content'
import GoShopBtn from '../../Shared/Buttons/GoShopBtn'
import styles from './home-new-arrivals.module.scss'

const GrayNewArrivals = () => (
  <div className={styles['gray-section']}>
    <div className={styles['gray-content']}>
      <div className={styles['gray-column']}>
        <p className={styles['gray-text']}>{content.loremThree}</p>
        <GoShopBtn className="btn--dark">shop now</GoShopBtn>
      </div>
      <div className={styles['gray-column']} />
    </div>
  </div>
)

const HomeNewArrivals = () => (
  <>
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h2 className={styles.heading}>
            <span className="fw-thin">New </span>
            <span className="fw-semi-bold">Arrivals</span>
          </h2>
        </div>
        <div className={styles.column}>
          <img
            className={styles.image}
            src={newArrivalImg}
            alt="man wearing blue shirt"
          />
        </div>
      </div>
      <GrayNewArrivals />
    </section>
  </>
)

export default HomeNewArrivals
