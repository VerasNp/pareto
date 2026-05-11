import type Vector2 from "mwpjs/Vector2";
import type { IRasterizerCircle } from "./IRasterizerCircle";
import type Image from "#image/Image.ts";
import type Color from "#image/Color.ts";

class CircleBresenham implements IRasterizerCircle {
	public drawCircle(
		img: Image,
		center: Vector2,
		radius: number,
		color: Color,
	): void {
		let D = 3 - 2 * radius;
		for (let x = radius, y = 0; x >= y; y++) {
			img.setPixel(center.x + x, center.y + y, color);
			img.setPixel(center.x + x, center.y - y, color);
			img.setPixel(center.x - x, center.y + y, color);
			img.setPixel(center.x - x, center.y - y, color);
			img.setPixel(center.x + y, center.y + x, color);
			img.setPixel(center.x + y, center.y - x, color);
			img.setPixel(center.x - y, center.y + x, color);
			img.setPixel(center.x - y, center.y - x, color);
			// let dl = Math.abs((x - 1) * (x - 1) + (y + 1) * (y + 1) - Math.pow(radius, 2));
			// let dr = Math.abs(x * x + (y + 1) * (y + 1) - Math.pow(radius, 2));
			// if (dl < dr) x--;
			if (D > 0) {
				D += 4 * (y - x) + 10;
				x--;
			} else {
				D += 4 * y + 6;
			}
		}
	}
}
export default CircleBresenham;
