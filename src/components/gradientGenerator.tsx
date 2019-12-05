import React, {useState} from 'react'
import {styled} from '../styles/theme'
import ColorPanel from '../components/colorPanel'
import {Color, RGB} from '../util/color'
import ColorSlider from './colorSlider'
import ColorPicker from './colorPicker'

const CanvasHost = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  canvas {
    display: block;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GradientGenerator = () => {
  const [topLeft, setTopLeft] = useState(new Color(new RGB(255, 0, 0)))
  const [topRight, setTopRight] = useState(new Color(new RGB(0, 255, 0)))
  const [bottomLeft, setBottomLeft] = useState(new Color(new RGB(0, 0, 255)))
  const [bottomRight, setBottomRight] = useState(new Color(new RGB(0, 255, 255)))
  const [canvasHeight, setCanvasHeight] = useState(800)
  const [canvasWidth, setCanvasWidth] = useState(800)
  const [cellHeight, setCellHeight] = useState(20)
  const [cellWidth, setCellWidth] = useState(20)

  const [channelValue, setChannelValue] = useState(0)

  return (
    <CanvasHost>
      <PickerContainer>
        <ColorPicker color={topLeft} onColorChanged={color => setTopLeft(color)} />
        <ColorPicker color={topRight} onColorChanged={color => setTopRight(color)} />
      </PickerContainer>
      <ColorPanel
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        cellHeight={cellHeight}
        cellWidth={cellWidth}
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
      />
      <PickerContainer>
        <ColorPicker color={bottomLeft} onColorChanged={color => setBottomLeft(color)} />
        <ColorPicker color={bottomRight} onColorChanged={color => setBottomRight(color)} />
      </PickerContainer>
    </CanvasHost>
  )
}

export default GradientGenerator
