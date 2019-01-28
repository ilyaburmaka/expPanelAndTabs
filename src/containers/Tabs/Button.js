import React, { Component, Fragment, Children } from "react";
// constants
import { NameTabs } from "constants/ExpansionPanels/ExpansionPanels";
// components
import ExpansionPanel from "components/ExpansionPanels/Panels/ExpansionPanels";
import Typography from "components/ExpansionPanels/Content/Content";
// styles
import { Wrapper, WrapPanel } from "styles/Panels/styles";
import { activeTabs, textForTab } from "constants/Tabs/Constant";

class Tabses extends Component {
    static defaultProps ={
        Tab:'LOREM',
        TabData:[{title:'lorem', index:'LOREM'}]
    }
  state = {
    activeTab: this.props.Tab
  };

    handleClick = ({activeTab}) => {
        this.setState({ activeTab });
    };

  render() {
    const { children, TabData } = this.props;
    const { activeTab } = this.state;
    return (
      <Fragment>
        {children({
            active: activeTab,
            handleActive: this.handleClick,
            tabData:TabData
        },

        )}
      </Fragment>
    );
  }
}

export default Tabses;
