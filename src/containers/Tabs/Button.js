import React, { Component, Fragment } from "react";
// constants
import PropTypes from "prop-types";

class Tabses extends Component {
  static propTypes = {
    Tab: PropTypes.string.isRequired,
    TabData: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {
    Tab: 'DEAF',
    TabData: [{ index: 'DEAF', title: 'default' }]
  };

  state = {
    activeTab: this.props.Tab
  };

    handleClick = activeTab =>()=> {
    this.setState({ activeTab });
  };

  render() {
    const { children,TabData } = this.props;
    const { activeTab } = this.state;
    return (
      <Fragment>
        {children({
          active: activeTab,
          handleSubmit: this.handleClick,
          TabData: TabData
        })}
      </Fragment>
    );
  }
}

export default Tabses;
