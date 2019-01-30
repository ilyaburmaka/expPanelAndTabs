import React from "react";
// constants
import { NameTabs } from "constants/ExpansionPanels/ExpansionPanels";
// components
import ExpansionPanel from "components/ExpansionPanels/Panels/ExpansionPanels";
import Typography from "components/ExpansionPanels/Content/Content";
// styles
import { Wrapper, WrapPanel } from "styles/Panels/styles";
// hoc(s)
import withAccordion from "hoc/withAccordion";
import PropTypes from "prop-types";

const Panels = ({ activeTab, handleSubmit, ThemeColor }) => (
  <Wrapper ThemeColor={ThemeColor}>
    {NameTabs.map((item, index) => (
      <WrapPanel key={index}>
        <ExpansionPanel
          header={item.mainTitle}
          handleTabChange={handleSubmit(item.value)}
        />
        <Typography
          active={item.value}
          act={activeTab}
          ThemeColor={ThemeColor}
        />
      </WrapPanel>
    ))}
  </Wrapper>
);

Panels.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  ThemeColor: PropTypes.bool.isRequired
};

export default withAccordion(Panels);
