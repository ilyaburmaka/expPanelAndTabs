import React from "react";
// styles
import { Button } from "styles/Tabs/styles";
// libs
import PropTypes from "prop-types";

const TabTitles = ({ active, handleActive, TabData }) =>
    TabData.map((item, index) => (
    <Button
      key={index}
      inputColor={active === item.value}
      onClick={handleActive}
    >
      {item.title}
    </Button>
  ));

TabTitles.propTypes = {
  active: PropTypes.string.isRequired,
  handleActive: PropTypes.func.isRequired,
  TabData: PropTypes.array.isRequired
};

export default TabTitles;
