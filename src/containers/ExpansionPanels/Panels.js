import React, { Component, Fragment } from "react"
// constants
import { NameTabs } from "constants/ExpansionPanels/ExpansionPanels"
// components
import ExpansionPanel from "components/ExpansionPanels/Panels/ExpansionPanels"
import Typography from "components/ExpansionPanels/Content/Content"
// styles
import { Wrapper } from "styles/Panels/styles"
import styles from "styles/Panels/style.css"

class Panels extends Component {
  state = {
    activeTab: ""
  }

  handleSubmit = activeTab => () => {
    this.setState(
      this.state.activeTab === activeTab ? { activeTab: "" } : { activeTab }
    )
  }

  render() {
    const { activeTab } = this.state
    return (
      <Wrapper>
        <h1>Accordion TASK</h1>
        {NameTabs.map((item, index) => (
          <Fragment key={index}>
            <ExpansionPanel
              header={item.mainTitle}
              handleTabChange={this.handleSubmit(item.value)}
            />
            <Typography active={item.value} act={activeTab} />
          </Fragment>
        ))}
      </Wrapper>
    )
  }
}

export default Panels
