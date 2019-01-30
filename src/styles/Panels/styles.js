import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  min-height: 0;
  background-color:  ${props=> props.color ? "#fefffa" : "#000"};
  padding: 10px;
  color: ${props=> props.color ? "#000" : "#fefffa"};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  font-size: 33px;
  line-height: 44px;
  font-weight: 500;
  width: 100%;
  height: 45px;
  display: block;
  cursor: pointer;

  ::after {
    float: right;
    content: "↓";
    animation: ${rotate} 2.5s;
    animation-direction: reverse;
  }
`;

const Text = styled.p`
  color: rgba(48, 69, 92, 0.8);
  font-size: 25px;
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
  transition: all 500ms ease;
`;

const PictDiv = styled.div`
  margin: 20px 0px 0px 200px;
`;

const WrapPanel = styled.div`
  width: 100%;
  border-bottom: 2px solid grey;
  margin-bottom: 15px;
`;

export { Wrapper, Div, Text, PictDiv, WrapPanel };
