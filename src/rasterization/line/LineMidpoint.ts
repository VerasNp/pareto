import Vector2 from "mwpjs/Vector2"
import type { IRasterizerLine } from "./IRasterizerLine"
import type Image from "#image/Image.ts"
import Line from "#geometry/Line.ts"

class LineMidpoint implements IRasterizerLine {
	public drawLine(line: Line, image: Image): void {
		const { p1, p2, color } = line
		const deltaX = Math.abs(p2.x - p1.x)
		const deltaY = Math.abs(p2.y - p1.y)
		if (deltaX <= 1 && deltaY <= 1) {
			image.setPixel(p1.x, p1.y, color)
			image.setPixel(p2.x, p2.y, color)
		} else {
			let midpoint = new Vector2(Math.round((p1.x + p2.x) / 2), Math.round((p1.y + p2.y) / 2))
			this.drawLine(new Line(p1, midpoint, color), image)
			this.drawLine(new Line(midpoint, p2, color), image)
		}
	}
}

export default LineMidpoint
