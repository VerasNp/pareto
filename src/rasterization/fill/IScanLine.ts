import type Polygon from "#geometry/Polygon.ts"
import type Image from "#image/Image.ts"

export interface IScanLine {
	fill(image: Image, polygon: Polygon): void
}
