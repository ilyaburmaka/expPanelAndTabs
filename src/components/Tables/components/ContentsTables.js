import React, { Fragment } from 'react'
//libs
import PropTypes from 'prop-types'

const ContentText = ({ content }) => {
  return (
    <Fragment>
      {Object.keys(content).map(key =>
        key === 'name' ? (
          <span className="name" key={key}>
            {content[key]}
          </span>
        ) : (
          <span key={key}>{content[key]}</span>
        )
      )}
    </Fragment>
  )
}

ContentText.propTypes = {
  content: PropTypes.object.isRequired
}

export { ContentText }
