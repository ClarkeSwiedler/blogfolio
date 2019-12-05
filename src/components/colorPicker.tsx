import React, {useState, useEffect} from 'react'
import {styled} from '../styles/theme'
import {Color, RGBChannel, RGB} from '../util/color'
import ColorSlider from './colorSlider'

const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: column;
`

interface ColorPickerProps {
  color: Color
  onColorChanged: (color: Color) => void
}

const ColorPicker = (props: ColorPickerProps) => {
  const [color, setColor] = useState(props.color)

  const [r, setR] = useState(props.color.rgb.r)
  const [g, setG] = useState(props.color.rgb.g)
  const [b, setB] = useState(props.color.rgb.b)

  useEffect(() => {
    props.onColorChanged(new Color(new RGB(r, g, b)))
  }, [r, g, b])

  const handleChange = (channel: RGBChannel) => (value: number) => {
    const newColor = color
    switch (channel) {
      case 'r':
        setR(value)
        break
      case 'g':
        setG(value)
        break
      case 'b':
        setB(value)
        break
      default:
        break
    }
    props.onColorChanged(new Color(new RGB(r, g, b)))
    setColor(newColor)
  }

  return (
    <StyledColorPicker>
      <ColorSlider channel="r" value={r} onChanged={handleChange('r')} />
      <ColorSlider channel="g" value={g} onChanged={handleChange('g')} />
      <ColorSlider channel="b" value={b} onChanged={handleChange('b')} />
    </StyledColorPicker>
  )
}

export default ColorPicker
