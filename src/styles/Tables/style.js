//libs
import styled from "styled-components";
import PropTypes from "prop-types";

const MainCell = styled.span``;

const ContentCell = styled.span`
  text-align: ${props => (props.isLeft ? "-moz-left" : "-moz-right")};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.howRow}, 1fr);
  border: 1px solid rgba(224, 224, 224, 1);
  color:  ${props=> props.ThemeColor ? "#000" : "#fff"};
  font-size: 1rem;
  font-weight: 500;
  background: ${props=> props.ThemeColor ? "#fff" : "#000"};
  padding: 15px;

  ${MainCell} {
    &:nth-child(1) {
      text-align: left;
      text-align: -moz-left;
    }

    display: table-cell;
    padding: 4px 0px 4px 3px;
    vertical-align: inherit;
    padding: 8px 15px;
    text-align: right;
    text-align: -moz-right;
    border: 1px solid rgba(224, 224, 224, 1);
  }

  ${ContentCell} {
    padding: 8px 15px;
    border: 1px solid rgba(224, 224, 224, 1);
  }
`;

Grid.propTypes = {
  howRow: PropTypes.number.isRequired,
  ThemeColor: PropTypes.bool.isRequired
};

ContentCell.propTypes = {
  isLeft: PropTypes.bool.isRequired
};

export { Grid, MainCell, ContentCell };
