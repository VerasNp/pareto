import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"

class Polygon {
	public readonly vertices: Vector2[]
	public readonly color: Color
	constructor(vertices: Vector2[], color: Color) {
		this.vertices = vertices
		this.color = color
	}

	public edges(): [Vector2, Vector2][] {
		return this.vertices.map((v, i) => [v, this.vertices[(i + 1) % this.vertices.length]])
	}
}

export default Polygon
