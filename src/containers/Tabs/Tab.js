import React, { Fragment, useState } from "react";
// lib
import PropTypes from "prop-types";

const TabsRend = ({ children, TabData }) => {
  const [activeTab, setValue] = useState("SECOND");
  return (
    <Fragment>
      {children({
        active: activeTab,
        handleSubmit: setValue,
        TabData: TabData
      })}
    </Fragment>
  );
};

TabsRend.propTypes = {
  children: PropTypes.func.isRequired,
  TabData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TabsRend;
