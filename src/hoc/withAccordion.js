import React, { Component } from "react";

const withAccordion = ComposedComponent => {
  return class EnhancedComponent extends Component {
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
        <ComposedComponent
          {...this.props}
          handleSubmit={this.handleSubmit}
          activeTab={activeTab}
        />
      );
    }
  };
};

export default withAccordion;
