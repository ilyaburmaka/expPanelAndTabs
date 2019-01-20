import React from "react"
// image
import Img from "additionals/pictureForTab.png"
// styles
import { PictDiv } from "styles/Panels/styles"

const Picture = () => (
  <PictDiv>
    <img src={Img} alt="pict" />
  </PictDiv>
)

export default Picture
