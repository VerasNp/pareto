import type Vector2 from "mwpjs/Vector2"
import type { IRasterizerCircle } from "./IRasterizerCircle"
import type Image from "#image/Image.ts"
import type Color from "#image/Color.ts"
import type Circle from "#geometry/Circle.ts"

class CircleBresenham implements IRasterizerCircle {
	public drawCircle(circle: Circle, img: Image): void {
		const { center, radius, color } = circle
		let x = 0
		let y = radius
		let d = 3 - 2 * radius
		this._plot8(img, center, x, y, color)
		while (x <= y) {
			if (d < 0) {
				d += 4 * x + 6
			} else {
				d += 4 * (x - y) + 10
				y--
			}
			x++
			this._plot8(img, center, x, y, color)
		}
	}

	private _plot8(img: Image, center: Vector2, x: number, y: number, color: Color): void {
		img.setPixel(center.x + x, center.y + y, color)
		img.setPixel(center.x - x, center.y + y, color)
		img.setPixel(center.x + x, center.y - y, color)
		img.setPixel(center.x - x, center.y - y, color)
		img.setPixel(center.x + y, center.y + x, color)
		img.setPixel(center.x - y, center.y + x, color)
		img.setPixel(center.x + y, center.y - x, color)
		img.setPixel(center.x - y, center.y - x, color)
	}
}
export default CircleBresenham
