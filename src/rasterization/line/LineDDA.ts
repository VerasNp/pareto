import type { IRasterizerLine } from "./IRasterizerLine"
import type Image from "../../image/Image"
import type Line from "#geometry/Line.ts"

class LineDDA implements IRasterizerLine {
	public drawLine(line: Line, image: Image): void {
		const { p1, p2, color } = line
		const deltaMax = Math.max(Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y))
		for (let index = 0; index <= deltaMax; index++) {
			const t = index / deltaMax
			const p = p1.add(p2.subtract(p1).multByScalar(t))
			image.setPixel(Math.round(p.x), Math.round(p.y), color)
		}
	}
}

export default LineDDA
