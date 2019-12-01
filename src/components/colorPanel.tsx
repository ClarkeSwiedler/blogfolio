import React, {useEffect, useRef, Context} from 'react'
import {RGB, HSL, Color} from '../util/color'

interface ColorRectArrayValues {
  topLeft: Color
  topRight: Color
  bottomLeft: Color
  bottomRight: Color
  numAcross: number
  numDown: number
  cellHeight: number
  cellWidth: number
}

class ColorRectArray {
  topLeft: Color
  topRight: Color
  bottomLeft: Color
  bottomRight: Color
  numAcross: number
  numDown: number
  cellHeight: number
  cellWidth: number

  current: ColorRect[]

  constructor(values: ColorRectArrayValues) {
    this.topLeft = values.topLeft
    this.topRight = values.topRight
    this.bottomLeft = values.bottomLeft
    this.bottomRight = values.bottomRight
    this.numAcross = values.numAcross
    this.numDown = values.numDown
    this.cellHeight = values.cellHeight
    this.cellWidth = values.cellWidth
    this.current = []
  }

  populate() {
    this.current = []
    for (let i = 0; i <= this.numDown; i += 1) {
      for (let j = 0; j <= this.numAcross; j += 1) {
        const posX = this.cellWidth * i
        const posY = this.cellHeight * j
        const color = this.calculateCell(i, j)
        this.current.push(new ColorRect(color.asRGB(), posX, posY, this.cellHeight, this.cellWidth))
      }
    }
  }

  calculateCell(posX: number, posY: number): Color {
    const tl = this.topLeft.asRGB()
    const tr = this.topRight.asRGB()
    const bl = this.bottomLeft.asRGB()
    const br = this.bottomRight.asRGB()
    console.log(
      `Square values: tl: ${JSON.stringify(tl)}, tr: ${JSON.stringify(tr)}, bl: ${JSON.stringify(
        bl,
      )}, br: ${JSON.stringify(br)}`,
    )

    const r = this.applyGradient(tl.r, tr.r, bl.r, br.r, posX, posY)
    const g = this.applyGradient(tl.g, tr.g, bl.g, br.g, posX, posY)
    const b = this.applyGradient(tl.b, tr.b, bl.b, br.b, posX, posY)

    return new Color(new RGB(r, g, b))
  }

  applyGradient(
    topLeft: number,
    topRight: number,
    bottomLeft: number,
    bottomRight: number,
    posX: number,
    posY: number,
  ) {
    return (
      topLeft * (1 - posX / this.numAcross) * (1 - posY / this.numDown) +
      topRight * (posX / this.numAcross) * (1 - posY / this.numDown) +
      bottomLeft * (1 - posX / this.numAcross) * (posY / this.numDown) +
      bottomRight * (posX / this.numAcross) * (posY / this.numDown)
    )

    // return (
    //   bottomLeft * (posY / this.numDown) +
    //   topLeft * (1 - posY / this.numDown) * (posX / this.numAcross) +
    //   (bottomRight * (posY / this.numDown) +
    //     topRight * (1 - posY / this.numDown) * (1 - posX / this.numAcross))
    // )
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
  const boxHeight = 40
  const boxWidth = 40
  const numAcross = Math.floor(canvasWidth / boxWidth)
  const numDown = Math.floor(canvasHeight / boxHeight)

  const options: ColorRectArrayValues = {
    topLeft: new Color(new RGB(255, 0, 0)),
    topRight: new Color(new RGB(0, 255, 0)),
    bottomLeft: new Color(new RGB(0, 0, 255)),
    bottomRight: new Color(new RGB(0, 0, 0)),
    numAcross: Math.floor(canvasWidth / boxWidth),
    numDown: Math.floor(canvasHeight / boxHeight),
    cellHeight: boxHeight,
    cellWidth: boxWidth,
  }

  const array = new ColorRectArray(options)
  array.populate()
  console.log(JSON.stringify(array))
  array.current.forEach(rect => {
    ctx.fillStyle = rect.color.toCssString()
    ctx.fillRect(rect.posX, rect.posY, rect.width, rect.height)
  })

  // const color = new Color(new RGB(200, 100, 56))
  // ctx.fillStyle = color.asRGB().toCssString()
  // ctx.fillRect(0, 0, 40, 40)
  // const otherColor = color.asHSL()
  // const convertedColor = new Color(otherColor).asRGB()
  // ctx.fillStyle = convertedColor.toCssString()
  // ctx.fillRect(40, 0, 40, 40)
}

interface ColorPanelProps {}

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
