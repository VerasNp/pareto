import type Color from "#image/Color.ts"
import Vector2 from "mwpjs/Vector2"
import Line from "./Line"

class Rectangle {
	public readonly topLeft: Vector2
	public readonly topRight: Vector2
	public readonly bottomLeft: Vector2
	public readonly bottomRight: Vector2
	public readonly origin: Vector2
	public readonly width: number
	public readonly height: number
	public readonly color: Color

	public constructor(origin: Vector2, width: number, height: number, color: Color) {
		this.origin = origin
		this.width = width
		this.height = height
		this.color = color
		this.topLeft = origin
		this.topRight = new Vector2(origin.x + width, origin.y)
		this.bottomLeft = new Vector2(origin.x, origin.y + height)
		this.bottomRight = new Vector2(origin.x + width, origin.y + height)
	}

	public toLines(): Line[] {
		return [
			new Line(this.topLeft, this.topRight, this.color),
			new Line(this.topRight, this.bottomRight, this.color),
			new Line(this.bottomRight, this.bottomLeft, this.color),
			new Line(this.bottomLeft, this.topLeft, this.color),
		]
	}
}

export default Rectangle
