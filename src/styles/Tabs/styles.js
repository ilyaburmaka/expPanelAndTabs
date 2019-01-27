//import styles
import styled from 'styled-components'
// libs
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #e3e3e3;
  position: absolute;
`
const AppBar = styled.div`
 
 background-color: #2196f3;
 height:55px;
`
const Button = styled.button`
  width: 130px;
  height: 100%;
  color: #fff;
  font-size: 22px;
  background: ${props => (props.inputColor ? 'red' : '#2196f3')};
  border: none;
  animation: 2s;
`

const Img = styled.img`
  margin: 20px;
`
const Content= styled.div`
  background-color: #fefffa;
  border: 2px solid red;
  border-radius: 5px;
 `
Button.propTypes = {
  inputColor: PropTypes.bool.isRequired,
}

export { Wrapper, Button, Img, AppBar,Content }
