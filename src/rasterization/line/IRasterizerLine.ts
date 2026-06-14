import type Image from "../../image/Image"
import type Line from "#geometry/Line.ts"

export interface IRasterizerLine {
	drawLine(line: Line, image: Image): void
}
