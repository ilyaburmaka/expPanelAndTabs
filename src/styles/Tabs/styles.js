//import styles
import styled from "styled-components";
// libs
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background: ${props => (props.isLight ? " #e3e3e3" : "#000")};
  position: absolute;
`;

const AppBar = styled.div`
  border: 2px solid #a75555e6;
  margin-bottom: 5px;
  background-color: ${props => (props.ThemeColor ? "#fff" : "#000")};
  height: 55px;
`;

const Button = styled.button`
  width: 130px;
  height: 100%;
  color: ${props => (props.ThemeColor ? "#000" : "#fff")};
  font-size: 22px;
  background: ${props =>
    props.inputColor ? "#a75555e6" : props.ThemeColor ? "#fff" : "#000"};
  border: none;
  animation: 3s;
`;

const Img = styled.img`
  margin: 20px;
`;

const Content = styled.div`
  background-color: ${props => (props.ThemeColor ? "#fefffa" : "#000")};
  border: 2px solid #a75555e6;
  border-radius: 5px;
`;
const ChangeColorButton = styled.button`
  width: 130px;
  height: 100%;
  float: right;
  margin-right: 50px;
  color: ${props => (props.ThemeColor ? "#000" : "#fff")};
  background: ${props => (props.ThemeColor ? "#fff" : "#000")};
  border: none;
  font-size: 22px;
`;

Button.propTypes = {
  inputColor: PropTypes.bool.isRequired,
  ThemeColor: PropTypes.bool.isRequired
};

Wrapper.propTypes = {
  isLight: PropTypes.bool.isRequired
};

AppBar.propTypes = {
  ThemeColor: PropTypes.bool.isRequired
};

Content.propTypes = {
  ThemeColor: PropTypes.bool.isRequired
};

ChangeColorButton.propTypes = {
  ThemeColor: PropTypes.bool.isRequired
};

export { Wrapper, Button, Img, AppBar, Content, ChangeColorButton };
