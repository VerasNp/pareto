import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"

class Ellipse {
	public readonly center: Vector2
	public readonly radiusX: number
	public readonly radiusY: number
	public readonly color: Color

	public constructor(center: Vector2, radiusX: number, radiusY: number, color: Color) {
		this.center = center
		this.radiusX = radiusX
		this.radiusY = radiusY
		this.color = color
	}
}

export default Ellipse
