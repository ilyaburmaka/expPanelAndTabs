import React, { Fragment } from 'react'
//libs
import PropTypes from 'prop-types'
import {ContentCell} from "styles/Tables/style"
const ContentText = ({ content }) => {
  return (
    <Fragment>
      {Object.keys(content).map(key =>
          <ContentCell isLeft = {key==="name"} key={key}>
            {content[key]}
          </ContentCell>
      )}
    </Fragment>
  )
}

ContentText.propTypes = {
  content: PropTypes.object.isRequired
}

export { ContentText }
