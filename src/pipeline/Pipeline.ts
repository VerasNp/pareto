import type { IRasterizerLine } from "#rasterization/line/IRasterizerLine.ts"
import type Image from "#image/Image.ts"
import Line from "#geometry/Line.ts"
import Rectangle from "#geometry/Rectangle.ts"
import type { IRasterizerCircle } from "#rasterization/circle/IRasterizerCircle.ts"
import Circle from "#geometry/Circle.ts"
import Ellipse from "#geometry/Ellipse.ts"
import type { IRasterizerEllipse } from "#rasterization/ellipse/IRasterizerEllipse.ts"
import type { IFloodFill } from "#rasterization/fill/IFloodFill.ts"
import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"
import Polygon from "#geometry/Polygon.ts"
import type { IScanLine } from "#rasterization/fill/IScanLine.ts"

interface PipelineConfig {
	rasterizerLine?: IRasterizerLine
	rasterizerCircle?: IRasterizerCircle
	rasterizerEllipse?: IRasterizerEllipse
	floodFill?: IFloodFill
	scanLine?: IScanLine
}

class Pipeline {
	private readonly config: PipelineConfig
	public constructor(config: PipelineConfig) {
		this.config = config
	}

	public draw(primitive: Line | Rectangle | Circle | Ellipse | Polygon, img: Image): void {
		if (primitive instanceof Line) {
			if (!this.config.rasterizerLine)
				throw new Error("Pipeline: rasterizerLine não configurado")
			this.config.rasterizerLine.drawLine(primitive, img)
		} else if (primitive instanceof Rectangle) {
			for (const line of primitive.toLines()) {
				if (!this.config.rasterizerLine)
					throw new Error("Pipeline: rasterizerLine não configurado")
				this.config.rasterizerLine.drawLine(line, img)
			}
		} else if (primitive instanceof Circle) {
			if (!this.config.rasterizerCircle)
				throw new Error("Pipeline: rasterizerCircle não configurado")
			this.config.rasterizerCircle.drawCircle(primitive, img)
		} else if (primitive instanceof Ellipse) {
			if (!this.config.rasterizerEllipse)
				throw new Error("Pipeline: rasterizerEllipse não configurado")
			this.config.rasterizerEllipse.drawEllipse(primitive, img)
		} else if (primitive instanceof Polygon) {
			if (!this.config.scanLine) throw new Error("No scan line rasterizer provided")
			this.config.scanLine.fill(img, primitive)
			return
		} else {
			throw new Error("Pipeline: tipo de primitiva desconhecido")
		}
	}

	public fill(img: Image, seed: Vector2, color: Color): void {
		if (!this.config.floodFill) throw new Error("No flood fill provided")
		this.config.floodFill.fill(img, seed, color)
	}
}

export default Pipeline
