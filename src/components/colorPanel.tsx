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
    const tl = this.topLeft.rgb
    const tr = this.topRight.rgb
    const bl = this.bottomLeft.rgb
    const br = this.bottomRight.rgb
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

interface ColorPanelProps {
  canvasWidth: number
  canvasHeight: number
  cellHeight: number
  cellWidth: number
  topLeft: Color
  topRight: Color
  bottomLeft: Color
  bottomRight: Color
}

const ColorPanel = (props: ColorPanelProps) => {
  const ref = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    fillCanvas(ctx)
  })

  const fillCanvas = (ctx: CanvasRenderingContext2D) => {
    const canvasWidth = ctx.canvas.width
    const canvasHeight = ctx.canvas.height
    const boxHeight = props.cellHeight
    const boxWidth = props.cellWidth
    const numAcross = Math.floor(canvasWidth / boxWidth)
    const numDown = Math.floor(canvasHeight / boxHeight)

    const options: ColorMatrixValues = {
      numAcross,
      numDown,
      topLeft: props.topLeft,
      topRight: props.topRight,
      bottomLeft: props.bottomLeft,
      bottomRight: props.bottomRight,
    }

    const matrix = new ColorMatrix(options)
    matrix.populate()
    // matrix.randomize()
    console.log(JSON.stringify(matrix))
    for (let i = 0; i <= numDown; i += 1) {
      for (let j = 0; j <= numAcross; j += 1) {
        ctx.fillStyle = matrix.current[i][j].rgb.toCssString()
        ctx.fillRect(boxWidth * j, boxHeight * i, boxWidth, boxHeight)
      }
    }
  }

  return (
    <canvas ref={ref} width={props.canvasWidth.toString()} height={props.canvasHeight.toString()} />
  )
}

export default ColorPanel
