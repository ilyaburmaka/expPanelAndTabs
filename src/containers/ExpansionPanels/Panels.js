import React, { Component, Fragment } from "react";
// constants
import { NameTabs } from "constants/ExpansionPanels/ExpansionPanels";
// components
import ExpansionPanel from "components/ExpansionPanels/Panels/ExpansionPanels";
import Typography from "components/ExpansionPanels/Content/Content";
// styles
import { Wrapper, WrapPanel } from "styles/Panels/styles";

class Panels extends Component {
  state = {
    activeTab: ""
  };

  handleSubmit = activeTab => () => {
    this.setState(state => ({
      activeTab: state.activeTab === activeTab ? "" : activeTab
    }));
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Wrapper>
        {NameTabs.map((item, index) => (
          <Fragment key={index}>
            <WrapPanel>
              <ExpansionPanel
                header={item.mainTitle}
                handleTabChange={this.handleSubmit(item.value)}
              />
              <Typography active={item.value} act={activeTab} />
            </WrapPanel>
          </Fragment>
        ))}
      </Wrapper>
    );
  }
}

export default Panels;
