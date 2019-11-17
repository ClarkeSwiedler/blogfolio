import React, {useEffect, useRef, Context} from 'react'

interface ColorPanelProps {}

class Color {
  red: number
  green: number
  blue: number

  constructor(red: number, green: number, blue: number) {
    this.red = red
    this.green = green
    this.blue = blue
  }

  toCssString(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
  }
}

class ColorRect {
  color: Color
  posX: number
  posY: number
  width: number
  height: number

  constructor(color: Color, posX: number, posY: number, height: number, width: number) {
    this.color = color
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
  }
}

const fillCanvas = (ctx: CanvasRenderingContext2D) => {
  const startColor = new Color(255, 0, 0)
  const endColor = new Color(0, 0, 255)
  const canvasWidth = ctx.canvas.width
  const canvasHeight = ctx.canvas.height
  const boxHeight = 20
  const boxWidth = 20
  const numAcross = Math.floor(canvasWidth / boxWidth)
  const numDown = Math.floor(canvasHeight / boxHeight)

  // for (let i = 1; i <= numAcross; i += 1) {}
}

const ColorPanel = (props: ColorPanelProps) => {
  const ref = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    fillCanvas(ctx)
  })

  return <canvas ref={ref} width="400" height="400" />
}

export default ColorPanel
