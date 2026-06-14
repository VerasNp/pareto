import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"

class Circle {
	public radius: number
	public center: Vector2
	public color: Color

	public constructor(center: Vector2, radius: number, color: Color) {
		this.center = center
		this.radius = radius
		this.color = color
	}
}

export default Circle
