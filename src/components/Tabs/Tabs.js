import React, { Fragment, useState,useContext } from "react";
// styles
import {
  Wrapper,
  AppBar,
  Content,
  ChangeColorButton
} from "styles/Tabs/styles";
// constants
import { textForTab } from "constants/Tabs/Constant";
// components
import TabsContent from "components/Tabs/Content/TabContent";
import TabTitles from "components/Tabs/Button/Button";
// containers
import TabsRend from "containers/Tabs/Tab";

const ColorContext = React.createContext();

const App = ({ MyActiveTab }) => {
  const [isLit, toggleLight] = useState(true);
  return (
    <Wrapper isLit={isLit}>
      <TabsRend Tab={MyActiveTab} TabData={textForTab}>
        {({ active, handleSubmit, TabData }) => (
          <Fragment>
            <AppBar isLit={isLit}>
              <TabTitles
                handleActive={handleSubmit}
                TabData={TabData}
                active={active}
                isLit={isLit}
              />
              <ChangeColorButton
                onClick={() => toggleLight(!isLit)}
                color={isLit}
              >
                {isLit ? "Ligth Mode" : "Dark Mode"}
              </ChangeColorButton>
            </AppBar>
              <ColorContext.Provider value={isLit}>
              <ColorContext.Consumer>
                  {value =>
                      <Content color={value}>
                          <TabsContent tab={active} color={value}/>
                      </Content>
                  }
              </ColorContext.Consumer>
              </ColorContext.Provider>
          </Fragment>
        )}
      </TabsRend>
    </Wrapper>
  );
};

export default App;
