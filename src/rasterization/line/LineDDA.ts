import type Vector2 from "mwpjs/Vector2"
import type Color from "../../image/Color"
import type { IRasterizerLine } from "./IRasterizerLine"
import type Image from "../../image/Image"

class LineDDA implements IRasterizerLine {
	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		const deltaMax = Math.max(Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y))
		for (let index = 0; index <= deltaMax; index++) {
			const t = index / deltaMax
			const p = p1.add(p2.subtract(p1).multByScalar(t))
			img.setPixel(Math.round(p.x), Math.round(p.y), color)
		}
	}
}

export default LineDDA
