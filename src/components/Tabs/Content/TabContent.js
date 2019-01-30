import React, { Fragment } from "react";
// styles
import { Img } from "styles/Tabs/styles";
// constants
import { activeTabs } from "constants/Tabs/Constant";
import { mainContent, contentTable } from "constants/Tables/Tables";
// lib
import PropTypes from "prop-types";
// image
import myPict from "additionals/pictureForTab.png";
// classes
import Panels from "containers/ExpansionPanels/Panels";
import TableComp from "components/Tables/Tables";

const TabsContent = ({ tab,color }) => (
  <Fragment>
    {tab === activeTabs.FIRST && <Panels color={color}/>}
    {tab === activeTabs.SECOND && (
      <TableComp TableHead={mainContent} TableCell={contentTable}  color={color}/>
    )}
    {tab === activeTabs.THIRD && <Img src={myPict} alt="Picture" />}
  </Fragment>
);

TabsContent.propTypes = {
  tab: PropTypes.string.isRequired
};

export default TabsContent;
