import React, {useEffect, useRef, Context} from 'react'
import {RGB, HSL, Color} from '../util/color'

interface ColorPanelProps {}

class ColorRectArray {
  current: RGB[][]

  populate(topLeft: RGB, topRight: RGB, bottomRight: RGB, bottomLeft: RGB, numAcross, numDown) {
    for (let i = 1; i <= numDown; i += 1) {
      for (let j = 1; j <= numAcross; j += 1) {
        const r = Math.floor(topLeft.r - ((topLeft.r - bottomRight.r) / numAcross) * i)
        const g = Math.floor(topLeft.g - ((topLeft.g - topLeft.g) / numAcross) * i)
        const b = Math.floor(topLeft.b - ((topLeft.b - bottomRight.b) / numAcross) * i)
        this.current[i][j] = new RGB(r, g, b)
      }
    }
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
      const r = Math.floor(startColor.r - ((startColor.r - endColor.r) / numAcross) * i)
      const g = Math.floor(startColor.g - ((startColor.g - endColor.g) / numAcross) * i)
      const b = Math.floor(startColor.b - ((startColor.b - endColor.b) / numAcross) * i)
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
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
