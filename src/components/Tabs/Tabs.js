import React, { Fragment } from "react";
// styles
import { Wrapper, AppBar, Content } from "styles/Tabs/styles";
// constants
import { textForTab } from "constants/Tabs/Constant";
// components
import TabsContent from "components/Tabs/Content/TabContent";
import TabTitles from "components/Tabs/Button/Button";
import TabsRend from "containers/Tabs/Tab";

const App = () => (
  <Wrapper>
    <TabsRend Tab={"FIRST"} TabData={textForTab}>
      {({ active, handleSubmit, TabData }) => (
        <Fragment>
          <AppBar>
            <TabTitles
              handleActive={handleSubmit}
              TabData={TabData}
              active={active}
            />
          </AppBar>
          <Content>
            <TabsContent tab={active} />
          </Content>
        </Fragment>
      )}
    </TabsRend>
  </Wrapper>
);

export default App;
