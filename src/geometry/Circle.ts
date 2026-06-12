import type Vector2 from "mwpjs/Vector2"

class Circle {
	public radius: number
	public center: Vector2

	constructor(center: Vector2, radius: number) {
		this.center = center
		this.radius = radius
	}
}

export default Circle
