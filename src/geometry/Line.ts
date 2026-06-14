import Vector2 from "mwpjs/Vector2"
import type Color from "#image/Color.ts"

class Line {
	public readonly p1: Vector2
	public readonly p2: Vector2
	public readonly color: Color

	public constructor(p1: Vector2, p2: Vector2, color: Color) {
		this.p1 = p1
		this.p2 = p2
		this.color = color
	}

	public static horizontal(y: number, x1: number, x2: number, color: Color): Line {
		return new Line(new Vector2(x1, y), new Vector2(x2, y), color)
	}

	public static vertical(x: number, y1: number, y2: number, color: Color): Line {
		return new Line(new Vector2(x, y1), new Vector2(x, y2), color)
	}
}

export default Line
