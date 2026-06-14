import type { IRasterizerCircle } from "./IRasterizerCircle"
import type Image from "#image/Image.ts"
import type Circle from "#geometry/Circle.ts"

class CircleDDA implements IRasterizerCircle {
	private readonly steps: number

	constructor(steps: number = 100) {
		this.steps = steps
	}

	public drawCircle(circle: Circle, img: Image): void {
		const { center, radius, color } = circle
		const delta = (2 * Math.PI) / this.steps
		for (let i = 0; i < this.steps; i++) {
			const angle = i * delta
			const col = Math.round(center.x + radius * Math.cos(angle))
			const row = Math.round(center.y + radius * Math.sin(angle))
			img.setPixel(col, row, color)
		}
	}
}

export default CircleDDA
