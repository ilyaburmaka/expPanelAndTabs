import React from "react";
//lib
import PropTypes from "prop-types";
//styles
import { Div } from "styles/Panels/styles";
const ExpansionPanel = ({ header, handleTabChange }) => (
  <Div onClick={handleTabChange}>{header}</Div>
);

ExpansionPanel.propTypes = {
  header: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired
};

export default ExpansionPanel;
