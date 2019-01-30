import React, { Component } from "react";
import { Wrapper } from "styles/Tabs/styles";

const ColorContext = React.createContext();

const withThemeApp = ComposedComponent => {
  return class EnhancedComponent extends Component {
    state = {
      ColorClicked: true
    };
    toggleLight = isLit => () => {
      this.setState(state => ({
        ColorClicked: !isLit
      }));
    };
    render() {
      const { ColorClicked } = this.state;
      return (
        <ColorContext.Provider value={ColorClicked}>
          <ColorContext.Consumer>
            {value => (
              <Wrapper isLight={value}>
                <ComposedComponent
                  {...this.props}
                  isLight={value}
                  Color={this.toggleLight}
                />
              </Wrapper>
            )}
          </ColorContext.Consumer>
        </ColorContext.Provider>
      );
    }
  };
};

export default withThemeApp;
