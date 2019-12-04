import React, {ChangeEvent} from 'react'
import {styled} from '../styles/theme'
import {type} from 'os'
import {RGBChannel} from '../util/color'

const StyledSlider = styled.input`
  display: block;
`

interface ColorSliderProps {
  channel: RGBChannel
  value: number
  onChanged: (value: number) => void
}

const ColorSlider = (props: ColorSliderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.currentTarget.value) || 0
    props.onChanged(newValue)
  }

  return <input type="range" min={0} max={255} value={props.value} onChange={handleChange} />
}

export default ColorSlider
