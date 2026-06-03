import Vector2 from "mwpjs/Vector2";
import type { IRasterizerLine } from "./IRasterizerLine";
import type Color from "#image/Color.ts";
import type Image from "#image/Image.ts";

class LineMidpoint implements IRasterizerLine {
	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		const deltaX = Math.abs(p2.x - p1.x);
		const deltaY = Math.abs(p2.y - p1.y);
		if (deltaX <= 1 && deltaY <= 1) {
			img.setPixel(p1.x, p1.y, color);
			img.setPixel(p2.x, p2.y, color);
		} else {
			let midpoint = new Vector2(
				Math.round((p1.x + p2.x) / 2),
				Math.round((p1.y + p2.y) / 2),
			);
			this.drawLine(img, p1, midpoint, color);
			this.drawLine(img, midpoint, p2, color);
		}
	}
}

export default LineMidpoint;
