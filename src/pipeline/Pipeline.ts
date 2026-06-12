import type Vector2 from "mwpjs/Vector2"
import type { IRasterizerCircle } from "#rasterization/circle/IRasterizerCircle.ts"
import type Color from "#image/Color.ts"
import type { IRasterizerLine } from "#rasterization/line/IRasterizerLine.ts"
import type Image from "#image/Image.ts"
import type { IRasterizerEllipse } from "#rasterization/ellipse/IRasterizerEllipse.ts"

export class Pipeline {
	private readonly _rasterizerLine?: IRasterizerLine
	private readonly _rasterizerCircle?: IRasterizerCircle
	private readonly _rasterizerEllipse?: IRasterizerEllipse

	constructor(
		rasterizerLine?: IRasterizerLine,
		rasterizerCircle?: IRasterizerCircle,
		rasterizerEllipse?: IRasterizerEllipse,
	) {
		this._rasterizerLine = rasterizerLine
		this._rasterizerCircle = rasterizerCircle
		this._rasterizerEllipse = rasterizerEllipse
	}

	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		if (!this._rasterizerLine) {
			throw new Error("No line rasterizer provided")
		}
		this._rasterizerLine.drawLine(img, p1, p2, color)
	}

	public drawCircle(img: Image, center: Vector2, radius: number, color: Color): void {
		if (!this._rasterizerCircle) {
			throw new Error("No circle rasterizer provided")
		}
		this._rasterizerCircle.drawCircle(img, center, radius, color)
	}

	public drawEllipse(img: Image, center: Vector2, rx: number, ry: number, color: Color): void {
		if (!this._rasterizerEllipse) {
			throw new Error("No ellipse rasterizer provided")
		}
		this._rasterizerEllipse.drawEllipse(img, center, rx, ry, color)
	}
}
