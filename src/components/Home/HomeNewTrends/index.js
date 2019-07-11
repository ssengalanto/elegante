import React from 'react'
import newTrendsImg from '../../../assets/images/homepage/new-trends.jpg'
import content from '../../../utilities/content/content'
import GoShopBtn from '../../Shared/Buttons/GoShopBtn'
import styles from './home-new-trends.module.scss'

const GrayNewTrends = () => (
  <div className={styles['gray-section']}>
    <div className={styles['gray-content']}>
      <div className={styles['gray-column']} />
      <div className={styles['gray-column']}>
        <p className={styles['gray-text']}>{content.loremThree}</p>
        <GoShopBtn className="btn--dark">shop now</GoShopBtn>
      </div>
    </div>
  </div>
)

const HomeNewTrends = () => (
  <>
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img
            className={styles.image}
            src={newTrendsImg}
            alt="woman wearing white shirt"
          />
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>
            <span className="fw-thin">New</span>{' '}
            <span className="fw-semi-bold">Trends</span>
          </h2>
        </div>
      </div>
      <GrayNewTrends />
    </section>
  </>
)

export default HomeNewTrends
