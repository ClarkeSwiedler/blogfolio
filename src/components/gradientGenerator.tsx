import React, {useState} from 'react'
import {styled} from '../styles/theme'
import ColorPanel from '../components/colorPanel'
import {Color, RGB} from '../util/color'
import ColorSlider from './colorSlider'

const CanvasHost = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GradientGenerator = () => {
  const [topLeft, setTopLeft] = useState(new Color(new RGB(255, 0, 0)))
  const [topRight, setTopRight] = useState(new Color(new RGB(0, 255, 0)))
  const [bottomLeft, setBottomLeft] = useState(new Color(new RGB(0, 0, 255)))
  const [bottomRight, setBottomRight] = useState(new Color(new RGB(0, 255, 255)))
  const [canvasHeight, setCanvasHeight] = useState(400)
  const [canvasWidth, setCanvasWidth] = useState(400)
  const [cellHeight, setCellHeight] = useState(40)
  const [cellWidth, setCellWidth] = useState(40)

  const [channelValue, setChannelValue] = useState(0)

  const handleChannelUpdate = (newValue: number) => {
    setChannelValue(newValue)
  }

  return (
    <CanvasHost>
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
      <ColorSlider channel="r" value={channelValue} onChanged={handleChannelUpdate} />
    </CanvasHost>
  )
}

export default GradientGenerator
