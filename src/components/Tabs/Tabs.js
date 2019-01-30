import React, { Fragment } from "react";
// styles
import { AppBar, Content, ChangeColorButton } from "styles/Tabs/styles";
// constants
import { textForTab } from "constants/Tabs/Constant";
// components
import TabsContent from "components/Tabs/Content/TabContent";
import TabTitles from "components/Tabs/Button/Button";
// containers
import TabsRend from "containers/Tabs/Tab";
// hoc(s)
import withThemeApp from "hoc/withThemeApp";
import PropTypes from "prop-types";

const App = ({ MyActiveTab, isLight, Color }) => {
  return (
    <TabsRend Tab={MyActiveTab} TabData={textForTab}>
      {({ active, handleSubmit, TabData }) => (
        <Fragment>
          <AppBar ThemeColor={isLight}>
            <TabTitles
              handleActive={handleSubmit}
              TabData={TabData}
              active={active}
              ThemeColor={isLight}
            />
            <ChangeColorButton onClick={Color(isLight)} ThemeColor={isLight}>
              {isLight ? "Ligth Mode" : "Dark Mode"}
            </ChangeColorButton>
          </AppBar>
          <Content ThemeColor={isLight}>
            <TabsContent tab={active} ThemeColor={isLight} />
          </Content>
        </Fragment>
      )}
    </TabsRend>
  );
};

App.propTypes = {
  MyActiveTab: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
  Color: PropTypes.func.isRequired
};

export default withThemeApp(App);
