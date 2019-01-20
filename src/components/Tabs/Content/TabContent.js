import React, { Fragment } from 'react'
// styles
import { Text, Img } from 'styles/Tabs/styles'
// constants
import { activeTabs } from 'constants/Tabs/Constant'
// lib
import PropTypes from 'prop-types'
// image
import myPict from 'additionals/pictureForTab.png'
// classes
import Panels from 'containers/ExpansionPanels/Panels'

const TabsContent = ({ tab }) => (
  <Fragment>
    {tab === activeTabs.FIRST && <Panels />}
    {tab === activeTabs.SECOND && <Text>NOT FOUND</Text>}
    {tab === activeTabs.THIRD && <Img src={myPict} alt="Picture" />}
  </Fragment>
)

TabsContent.propTypes = {
  tab: PropTypes.string.isRequired,
}

export default TabsContent
