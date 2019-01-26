//libs
import styled from "styled-components";
import PropTypes from "prop-types"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.howRow}, 1fr);
  border: 1px solid rgba(224, 224, 224, 1);
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: 500;
  background:#fff;
  padding:15px;
  span {
    padding: 8px 15px;
    text-align:right;
    text-align:-moz-right;
    border: 1px solid rgba(224, 224, 224, 1);
  }
  span strong {
    display: table-cell;
    padding: 4px 0px 4px 3px;
    vertical-align: inherit;
    

  }
    span:nth-child(1){
      text-align:left;
      text-align:-moz-left;
    }
   .name{
   text-align:left;
   } 
`

Grid.propTypes = {
  howRow: PropTypes.number.isRequired
}
export { Grid }
