import React, { Component } from "react";
import { WrapPanel, Wrapper } from "styles/Panels/styles";
import { NameTabs } from "constants/ExpansionPanels/ExpansionPanels";
import ExpansionPanel from "containers/ExpansionPanels/Panels";

const withAccordion = () => {
  return class EnhancedComponent extends Component {
    state = {
      activeTab: ''
    };

    handleSubmit = activeTab => {
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
  };
};
