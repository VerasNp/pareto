import type { IRasterizerLine } from "#rasterization/line/IRasterizerLine.ts"
import type Image from "#image/Image.ts"
import Line from "#geometry/Line.ts"
import Rectangle from "#geometry/Rectangle.ts"
import type { IRasterizerCircle } from "#rasterization/circle/IRasterizerCircle.ts"
import Circle from "#geometry/Circle.ts"
import Ellipse from "#geometry/Ellipse.ts"
import type { IRasterizerEllipse } from "#rasterization/ellipse/IRasterizerEllipse.ts"

interface PipelineConfig {
	rasterizerLine?: IRasterizerLine
	rasterizerCircle?: IRasterizerCircle
	rasterizerEllipse?: IRasterizerEllipse
}

class Pipeline {
	private readonly config: PipelineConfig
	public constructor(config: PipelineConfig) {
		this.config = config
	}

	public draw(primitive: Line | Rectangle | Circle | Ellipse, img: Image): void {
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
		} else {
			throw new Error("Pipeline: tipo de primitiva desconhecido")
		}
	}
}

export default Pipeline
