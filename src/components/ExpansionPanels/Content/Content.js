import React, { Fragment } from "react"
// constants
import { TabsContent } from "constants/ExpansionPanels/ExpansionPanels"
// libs
import PropTypes from "prop-types"
// styles
import { Text } from "styles/Panels/styles"
//components
import Picture from "components/ExpansionPanels/Content/components/Image"
import { TableComp }  from 'components/Tables/Tables'
const Typography = ({ active, act }) => (
  <Fragment>
    {act === TabsContent.FIRST && active === TabsContent.FIRST && (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        beatae debitis dicta eius enim eos est excepturi ipsam magnam maxime
        minima necessitatibus nobis quidem repudiandae, sit totam voluptatem
        voluptatibus voluptatum?
      </Text>
    )}
    {act === TabsContent.SECOND && active === TabsContent.SECOND && <TableComp />}
    {act === TabsContent.THIRD && active === TabsContent.THIRD && (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        fuga magni minima nesciunt! Accusantium atque, commodi consequuntur
        distinctio eligendi facilis itaque libero, minus molestias nemo
        quibusdam quidem, quod sed vitae.
      </Text>
    )}
    {act === TabsContent.FOURTH && active === TabsContent.FOURTH && <Picture />}
  </Fragment>
)

Typography.propTypes = {
  active: PropTypes.string.isRequired,
  act: PropTypes.string.isRequired
}

export default Typography
