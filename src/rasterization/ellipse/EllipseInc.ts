import type Vector2 from "mwpjs/Vector2"
import type { IRasterizerEllipse } from "./IRasterizerEllipse"
import type Image from "#image/Image.ts"
import type Color from "#image/Color.ts"
import type Ellipse from "#geometry/Ellipse.ts"

class EllipseInc implements IRasterizerEllipse {
	public drawEllipse(ellipse: Ellipse, img: Image): void {
		const { radiusX: a, radiusY: b, center, color } = ellipse
		this._drawFirstRegion(img, a, b, center, color)
		this._drawSecondRegion(img, a, b, center, color)
	}

	private _drawFirstRegion(img: Image, a: number, b: number, center: Vector2, color: Color) {
		for (let x = a, y = 0; b * b * x > a * a * y; y++) {
			this._plot4(img, center, x, y, color)
			if (Math.abs(this._error(x - 1, y + 1, a, b)) < Math.abs(this._error(x, y + 1, a, b))) {
				x--
			}
		}
	}

	private _drawSecondRegion(img: Image, a: number, b: number, center: Vector2, color: Color) {
		for (let x = 0, y = b; a * a * y > b * b * x; x++) {
			this._plot4(img, center, x, y, color)
			if (Math.abs(this._error(x + 1, y - 1, a, b)) < Math.abs(this._error(x + 1, y, a, b))) {
				y--
			}
		}
	}

	private _plot4(img: Image, center: Vector2, x: number, y: number, color: Color): void {
		img.setPixel(center.x + x, center.y + y, color)
		img.setPixel(center.x - x, center.y + y, color)
		img.setPixel(center.x + x, center.y - y, color)
		img.setPixel(center.x - x, center.y - y, color)
	}

	private _error(x: number, y: number, a: number, b: number): number {
		return a * a * y * y + b * b * x * x - a * a * b * b
	}
}

export default EllipseInc
