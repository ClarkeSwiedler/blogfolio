import React, {useEffect, useRef, Context} from 'react'

interface ColorPanelProps {}

class RGB {
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
  color: RGB
  posX: number
  posY: number
  width: number
  height: number

  constructor(color: RGB, posX: number, posY: number, height: number, width: number) {
    this.color = color
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
  }
}

const fillCanvas = (ctx: CanvasRenderingContext2D) => {
  const startColor = new RGB(255, 255, 255)
  const endColor = new RGB(0, 0, 0)
  const canvasWidth = ctx.canvas.width
  const canvasHeight = ctx.canvas.height
  const boxHeight = 20
  const boxWidth = 20
  const numAcross = Math.floor(canvasWidth / boxWidth)
  const numDown = Math.floor(canvasHeight / boxHeight)

  for (let i = 1; i <= numDown; i += 1) {
    for (let j = 1; j <= numAcross; j += 1) {
      const xpos = j * boxWidth
      const ypos = i * boxHeight
      const red = Math.floor(startColor.red - ((startColor.red - endColor.red) / numAcross) * i)
      const green = Math.floor(
        startColor.green - ((startColor.green - endColor.green) / numAcross) * i,
      )
      const blue = Math.floor(startColor.blue - ((startColor.blue - endColor.blue) / numAcross) * i)
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
      ctx.fillRect(xpos, ypos, boxWidth, boxHeight)
    }
  }
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
