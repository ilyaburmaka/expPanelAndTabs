import React, { Component,Fragment } from 'react'
// styles
import { Wrapper,AppBar,Content } from 'styles/Tabs/styles'
// constants
import { activeTabs, textForTab } from 'constants/Tabs/Constant'
// components
import TabsContent from 'components/Tabs/Content/TabContent'
import TabTitles from 'components/Tabs/Button/Button'
import Tabses from 'containers/Tabs/Button'
class App extends Component {

   render() {
    return (
      <Wrapper>
          <Tabses
              Tab={'SECOND'}
              TabData={textForTab}
          >
            {({active,handleActive,tabData}) => (
               <Fragment>
                 <AppBar>
                   {textForTab.map(({ value, title }) => (
                       <TabTitles
                           key={value}
                           isActiveTab={active === value}
                           handleActive={handleActive}
                           title={title}
                       />
                   ))}
                 </AppBar>
                 <Content>
                   <TabsContent tab={active} />
                 </Content>
               </Fragment>
            )}
          </Tabses>
      </Wrapper>
    )
  }
}

export default App
