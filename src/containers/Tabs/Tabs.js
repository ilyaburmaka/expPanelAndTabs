import React, { Component } from 'react'
// styles
import { Wrapper,AppBar,Content } from 'styles/Tabs/styles'
// constants
import { activeTabs, textForTab } from 'constants/Tabs/Constant'
// components
import TabsContent from 'components/Tabs/Content/TabContent'
import TabTitles from 'components/Tabs/Button/Button'

class App extends Component {
  state = {
    activeTab: activeTabs.FIRST,
  }

  handleSubmit = activeTab => () => {
    this.setState({ activeTab })
  };

  render() {
    const { activeTab } = this.state
    return (
      <Wrapper>
    <AppBar>
        {textForTab.map(({ value, title }) => (
          <TabTitles
            key={value}
            isActiveTab={activeTab === value}
            handleTabChange={this.handleSubmit(value)}
            title={title}
          />
        ))}
    </AppBar>
        <Content>
          <TabsContent tab={activeTab} />
        </Content>
      </Wrapper>
    )
  }
}

export default App
