import React from "react";
//libs
import PropTypes from "prop-types";
// style(s)
import { ContentCell } from "styles/Tables/style";

const ContentText = ({ content }) =>(
  Object.keys(content).map(key => (
    <ContentCell isLeft={key === "name"} key={key}>
      {content[key]}
    </ContentCell>
  ))
);

ContentText.propTypes = {
  content: PropTypes.object.isRequired
};

export { ContentText };
