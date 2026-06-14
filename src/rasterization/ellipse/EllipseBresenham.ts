import type Ellipse from "#geometry/Ellipse.ts"
import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"
import type { IRasterizerEllipse } from "./IRasterizerEllipse"
import type Image from "#image/Image.ts"

class EllipseBresenham implements IRasterizerEllipse {
	public drawEllipse(ellipse: Ellipse, img: Image): void {
		const { center, radiusX, radiusY, color } = ellipse
		const rx2 = radiusX * radiusX
		const ry2 = radiusY * radiusY
		let x = 0
		let y = radiusY
		let d1 = ry2 - rx2 * radiusY + 0.25 * rx2
		let dx = 2 * ry2 * x
		let dy = 2 * rx2 * y
		while (dx < dy) {
			this._plot4(img, center, x, y, color)
			if (d1 < 0) {
				x++
				dx += 2 * ry2
				d1 += dx + ry2
			} else {
				x++
				y--
				dx += 2 * ry2
				dy -= 2 * rx2
				d1 += dx - dy + ry2
			}
		}
		let d2 = ry2 * (x + 0.5) * (x + 0.5) + rx2 * (y - 1) * (y - 1) - rx2 * ry2
		while (y >= 0) {
			this._plot4(img, center, x, y, color)
			if (d2 > 0) {
				y--
				dy -= 2 * rx2
				d2 += rx2 - dy
			} else {
				x++
				y--
				dx += 2 * ry2
				dy -= 2 * rx2
				d2 += dx - dy + rx2
			}
		}
	}

	private _plot4(img: Image, center: Vector2, x: number, y: number, color: Color): void {
		img.setPixel(center.x + x, center.y + y, color)
		img.setPixel(center.x - x, center.y + y, color)
		img.setPixel(center.x + x, center.y - y, color)
		img.setPixel(center.x - x, center.y - y, color)
	}
}

export default EllipseBresenham
