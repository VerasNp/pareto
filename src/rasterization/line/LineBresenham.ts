import type { IRasterizerLine } from "./IRasterizerLine"
import type Image from "#image/Image.ts"
import type Line from "#geometry/Line.ts"

class LineBresenham implements IRasterizerLine {
	public drawLine(line: Line, image: Image): void {
		let x = line.p1.x
		let y = line.p1.y
		const deltaX = Math.abs(line.p2.x - line.p1.x)
		const deltaY = Math.abs(line.p2.y - line.p1.y)
		const stepX = line.p1.x < line.p2.x ? 1 : -1
		const stepY = line.p1.y < line.p2.y ? 1 : -1
		if (deltaX >= deltaY) {
			let dM = 2 * deltaY - deltaX
			const incrE = 2 * deltaY
			const incrNE = 2 * (deltaY - deltaX)
			for (let i = 0; i <= deltaX; i++) {
				image.setPixel(x, y, line.color)
				x += stepX
				if (dM > 0) {
					y += stepY
					dM += incrNE
				} else {
					dM += incrE
				}
			}
		} else {
			let dM = 2 * deltaX - deltaY
			const incrE = 2 * deltaX
			const incrNE = 2 * (deltaX - deltaY)
			for (let i = 0; i <= deltaY; i++) {
				image.setPixel(x, y, line.color)
				y += stepY
				if (dM > 0) {
					x += stepX
					dM += incrNE
				} else {
					dM += incrE
				}
			}
		}
	}
}

export default LineBresenham
