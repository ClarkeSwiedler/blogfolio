import React, {ChangeEvent} from 'react'
import {styled} from '../styles/theme'

const StyledSlider = styled.input``

interface ColorSliderProps {
  channel: 'r' | 'g' | 'b'
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
