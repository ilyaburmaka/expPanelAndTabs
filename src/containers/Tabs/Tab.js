import React, { Fragment, useState } from "react";
// lib
import PropTypes from "prop-types";

const TabsRend = ({ children, TabData, Tab }) => {
  const [activeTab, setValue] = useState(Tab);
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
  Tab: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  TabData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TabsRend;
