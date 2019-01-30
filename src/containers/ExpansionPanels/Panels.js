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

const Panels = ({ activeTab, handleSubmit,color }) => (
  <Wrapper color={color}>
    {NameTabs.map((item, index) => (
      <WrapPanel key={index}>
        <ExpansionPanel
          header={item.mainTitle}
          handleTabChange={handleSubmit(item.value)}
        />
        <Typography active={item.value} act={activeTab} color={color}/>
      </WrapPanel>
    ))}
  </Wrapper>
);

export default withAccordion(Panels);
