//libs
import styled from "styled-components";
import PropTypes from "prop-types"
const MainCell = styled.span`
 
`
const ContentCell = styled.span`
 text-align: ${props => props.isLeft ? "-moz-left" : "-moz-right"};
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.howRow}, 1fr);
  border: 1px solid rgba(224, 224, 224, 1);
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: 500;
  background:#fff;
  padding:15px;

  ${MainCell} {
    display: table-cell;
    padding: 4px 0px 4px 3px;
    vertical-align: inherit;
    padding: 8px 15px;
  border: 1px solid rgba(224, 224, 224, 1);
  }
    ${MainCell}:nth-child(1){
      text-align:left;
      text-align:-moz-left;
    }
  ${ContentCell}{
      padding: 8px 15px;
  border: 1px solid rgba(224, 224, 224, 1);
  }

  

`

Grid.propTypes = {
  howRow: PropTypes.number.isRequired
}
ContentCell.propTypes = {
  isLeft: PropTypes.bool.isRequired
}
export { Grid,MainCell,ContentCell }
