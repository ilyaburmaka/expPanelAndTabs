import React, { Fragment } from 'react'
//libs
import PropTypes from 'prop-types'
import {MainCell} from "styles/Tables/style"

const MainNames = ({ names }) => (
  <Fragment>
    <MainCell isLeft={false}>
    {names}
    </MainCell>
  </Fragment>
)

MainNames.propTypes = {
  names: PropTypes.string.isRequired
}

export { MainNames }
