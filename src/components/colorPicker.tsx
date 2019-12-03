import React, {useState} from 'react'
import {styled} from '../styles/theme'
import {Color} from '../util/color'
import ColorSlider from './colorSlider'

const StyledColorPicker = styled.div``

interface ColorPickerProps {
  color: Color
  onColorChanged: (color: Color) => void
}

const ColorPicker = (props: ColorPickerProps) => {
  const [color, setColor] = useState(Color.white)
}
