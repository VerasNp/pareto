import type Color from "#image/Color.ts"
import type Image from "#image/Image.ts"
import type Vector2 from "mwpjs/Vector2"

export interface IRasterizerEllipse {
	drawEllipse(img: Image, center: Vector2, rx: number, ry: number, color: Color): void
}
