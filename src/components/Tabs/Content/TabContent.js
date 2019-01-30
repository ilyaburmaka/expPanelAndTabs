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

const TabsContent = ({ tab, ThemeColor }) => (
  <Fragment>
    {tab === activeTabs.FIRST && <Panels ThemeColor={ThemeColor} />}
    {tab === activeTabs.SECOND && (
      <TableComp
        TableHead={mainContent}
        TableCell={contentTable}
        ThemeColor={ThemeColor}
      />
    )}
    {tab === activeTabs.THIRD && <Img src={myPict} alt="Picture" />}
  </Fragment>
);

TabsContent.propTypes = {
  tab: PropTypes.string.isRequired,
  ThemeColor: PropTypes.bool.isRequired
};

export default TabsContent;
