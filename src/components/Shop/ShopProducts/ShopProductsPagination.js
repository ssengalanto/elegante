import PropTypes from 'prop-types'
import React, { memo } from 'react'

const ShopProductsPagination = memo(({ pageNum, active, pageNavHandler }) => (
  <button
    type="button"
    className={active}
    aria-label={`page ${pageNum}`}
    onClick={() => pageNavHandler(pageNum)}
  >
    {pageNum}
  </button>
))

ShopProductsPagination.propTypes = {
  active: PropTypes.string.isRequired,
  pageNum: PropTypes.number.isRequired,
  pageNavHandler: PropTypes.func.isRequired
}

export default ShopProductsPagination
