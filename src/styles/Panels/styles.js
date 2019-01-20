import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  min-height: 0;
  position: relative;
  left: 50%;
  margin: 29px 40px 0px 0px;
  transform: translate(-50%, 0);
  background-color: #fefffa;
  padding: 30px;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Div = styled.div`
    font-size: 30px;
    line-height: 34px;
    font-weight: 300;
    width:99%;
    height:40px;
    letter-spacing: 1px;
    display: block;
    background-color: #fefffa;
    margin: 0;
    cursor: pointer;
    ::after{
        float:right
        content: "↓";
        animation: ${rotate} 2s;
        animation-direction: reverse;
    }
`
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
`
const PictDiv = styled.div`
  margin: 20px 0px 0px 200px;
`
const Tables = styled.table`
  width: 100%;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  border: double;
`

export { Wrapper, Div, Text, PictDiv, Tables }
