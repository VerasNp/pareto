import type Vector2 from "mwpjs/Vector2";
import type Image from "../image/Image";
import type Color from "../image/Color";

class EllipseInc {
	public drawFirstRegion(
		img: Image,
		a: number,
		b: number,
		center: Vector2,
		color: Color,
	) {
		for (let x = a, y = 0; b * b * x > a * a * y; y++) {
			img.setPixel(center.x + x, center.y + y, color);
			img.setPixel(center.x - x, center.y + y, color);
			img.setPixel(center.x + x, center.y - y, color);
			img.setPixel(center.x - x, center.y - y, color);
			if (
				Math.abs(this.errorFirstRegion(x - 1, y + 1, a, b)) <
				Math.abs(this.errorFirstRegion(x, y + 1, a, b))
			) {
				x--;
			}
		}
	}

	private error(x: number, y: number, a: number, b: number) {
		return a * a * (y * y) + b * b * (x * x) - a * a * (b * b);
	}

	private errorFirstRegion(x: number, y: number, a: number, b: number) {
		return this.error(x, y, a, b) + a * a * (1 + 2 * y);
	}
}

export default EllipseInc;
