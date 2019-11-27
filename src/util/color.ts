export class RGB {
  r: number
  g: number
  b: number

  constructor(r: number, g: number, b: number) {
    this.r = r
    this.g = g
    this.b = b
  }

  toCssString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }
}

export class HSL {
  h: number
  s: number
  l: number

  constructor(h: number, s: number, l: number) {
    this.h = h
    this.s = s
    this.l = l
  }
}

export function rgbToHsl(rgb: RGB): HSL {
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number
  let s: number
  const l: number = (max + min) / 2

  if (max === min) {
    h = 0
    s = 0
  } else {
    const difference = max - min
    s = l > 0.5 ? difference / (2 - max - min) : difference / (max + min)

    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / difference + 2
        break
      case b:
        h = (r - g) / difference + 4
        break
      default:
        break
    }
    h /= 6
  }

  return new HSL(h, s, l)
}

const hueToRgb = (p: number, q: number, t: number) => {
  let et = t
  if (et < 0) et += 1
  if (et > 1) et -= 1
  if (et < 1 / 6) return p + (q - p) * 6 * et
  if (et < 1 / 2) return q
  if (et < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

export function hslToRgb(hsl: HSL) {
  let r: number
  let g: number
  let b: number
  const h = hsl.h
  const s = hsl.s
  const l = hsl.l

  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }

  return new RGB(r * 255, g * 255, b * 255)
}

export class Color {
  private rgb: RGB
  private hsl: HSL

  constructor(value: RGB | HSL) {
    if (value instanceof RGB) {
      this.rgb = value
    }
    if (value instanceof HSL) {
      this.hsl = value
    }
  }

  asHSL(): HSL {
    if (this.hsl) {
      return this.hsl
    }
    if (this.rgb === null) {
      return null
    }
    this.hsl = rgbToHsl(this.rgb)
    return this.hsl
  }

  asRGB(): RGB {
    if (this.rgb) {
      return this.rgb
    }
    if (this.hsl === null) {
      return null
    }
    this.rgb = hslToRgb(this.hsl)
    return this.rgb
  }
}
