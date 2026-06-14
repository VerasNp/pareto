import type Polygon from "#geometry/Polygon.ts"
import type Image from "#image/Image.ts"
import type { IScanLine } from "./IScanLine"

class ScanLine implements IScanLine {
	public fill(image: Image, polygon: Polygon): void {
		const { yMin, yMax } = this._boundingBox(polygon)
		for (let y = yMin; y <= yMax; y++) {
			const intersections = this._intersections(polygon, y)
			if (intersections.length < 2) continue
			intersections.sort((a, b) => a - b)
			for (let i = 0; i < intersections.length - 1; i += 2) {
				const xStart = Math.ceil(intersections[i])
				const xEnd = Math.floor(intersections[i + 1])
				for (let x = xStart; x <= xEnd; x++) {
					image.setPixel(x, y, polygon.color)
				}
			}
		}
	}

	private _boundingBox(polygon: Polygon): { yMin: number; yMax: number } {
		const ys = polygon.vertices.map((v) => v.y)
		return {
			yMin: Math.min(...ys),
			yMax: Math.max(...ys),
		}
	}

	private _intersections(polygon: Polygon, y: number): number[] {
		const xs: number[] = []
		for (const [v1, v2] of polygon.edges()) {
			if (v1.y === v2.y) continue
			if (y < Math.min(v1.y, v2.y)) continue
			if (y > Math.max(v1.y, v2.y)) continue
			const t = (y - v1.y) / (v2.y - v1.y)
			xs.push(v1.x + t * (v2.x - v1.x))
		}
		return xs
	}
}

export default ScanLine
