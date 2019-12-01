import React, {useEffect, useRef, Context} from 'react'
import {RGB, HSL, Color} from '../util/color'

interface ColorMatrixValues {
  topLeft: Color
  topRight: Color
  bottomLeft: Color
  bottomRight: Color
  numAcross: number
  numDown: number
}

class ColorMatrix {
  topLeft: Color
  topRight: Color
  bottomLeft: Color
  bottomRight: Color
  numAcross: number
  numDown: number

  current: Color[][]

  constructor(values: ColorMatrixValues) {
    this.topLeft = values.topLeft
    this.topRight = values.topRight
    this.bottomLeft = values.bottomLeft
    this.bottomRight = values.bottomRight
    this.numAcross = values.numAcross
    this.numDown = values.numDown
  }

  populate() {
    this.current = []
    for (let i = 0; i <= this.numDown; i += 1) {
      this.current[i] = []
      for (let j = 0; j <= this.numAcross; j += 1) {
        const color = this.calculateCell(i, j)
        this.current[i][j] = color
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
  }

  // randomize() {}

  randomizeArray(array: Color[]) {
    let currentIndex = this.current.length
    let temporaryValue: Color
    let randomIndex: number

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
  }
}

const fillCanvas = (ctx: CanvasRenderingContext2D) => {
  const canvasWidth = ctx.canvas.width
  const canvasHeight = ctx.canvas.height
  const boxHeight = 40
  const boxWidth = 40
  const numAcross = Math.floor(canvasWidth / boxWidth)
  const numDown = Math.floor(canvasHeight / boxHeight)

  const options: ColorMatrixValues = {
    numAcross,
    numDown,
    topLeft: new Color(new RGB(255, 0, 0)),
    topRight: new Color(new RGB(0, 255, 0)),
    bottomLeft: new Color(new RGB(0, 0, 255)),
    bottomRight: new Color(new RGB(0, 255, 255)),
  }

  const array = new ColorMatrix(options)
  array.populate()
  // array.randomize()
  console.log(JSON.stringify(array))
  for (let i = 0; i <= numDown; i += 1) {
    for (let j = 0; j <= numAcross; j += 1) {
      ctx.fillStyle = array.current[i][j].asRGB().toCssString()
      ctx.fillRect(boxWidth * j, boxHeight * i, boxWidth, boxHeight)
    }
  }
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
