import PropTypes from 'prop-types'
import React from 'react'
import styles from './shop-overview.module.scss'

const ShopOverviewDetails = ({ details }) => {
  const { description, measurement, sizing } = details
  return (
    <>
      <p className={styles.description}>{description.title}</p>
      <p>{description.content}</p>
      <p className={styles.description}>{measurement.title}</p>
      <div className={styles.measurement}>
        <p>
          Height: {measurement.height} <br />
          Chest: {measurement.chest}
        </p>
        <p>
          Waist: {measurement.waist} <br />
          Hips: {measurement.hips}
        </p>
      </div>
      <p className={styles.description}>{sizing.title}</p>
      <p>{sizing.content}</p>
      {/* <p className={styles.description}>{care.title}</p>
      <p>{care.content}</p> */}
    </>
  )
}

ShopOverviewDetails.propTypes = {
  details: PropTypes.shape({
    description: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string
    }),
    care: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string
    }),
    sizing: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string
    }),
    measurement: PropTypes.shape({
      chest: PropTypes.string,
      hips: PropTypes.string,
      title: PropTypes.string,
      height: PropTypes.string
    })
  }).isRequired
}

export default ShopOverviewDetails
