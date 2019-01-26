import React, { Fragment } from 'react'
//libs
import PropTypes from 'prop-types'

const MainNames = ({ names }) => (
  <Fragment>
    <span>
      <strong>{names}</strong>
    </span>
  </Fragment>
)

MainNames.propTypes = {
  names: PropTypes.string.isRequired
}

export { MainNames }
