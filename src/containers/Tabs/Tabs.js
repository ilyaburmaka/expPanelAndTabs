import React, { Component,Fragment } from 'react'
// styles
import {Wrapper, AppBar, Content, Button} from 'styles/Tabs/styles'
// constants
import { textForTab } from 'constants/Tabs/Constant'
// components
import TabsContent from 'components/Tabs/Content/TabContent'
import TabTitles from 'components/Tabs/Button/Button'
import Tabses from 'containers/Tabs/Button'
class App extends Component {

   render() {
    return (
      <Wrapper>
        <Tabses Tab={"FIRST"} TabData={textForTab}>
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
        </Tabses>
      </Wrapper>
    );
  }
}

export default App
