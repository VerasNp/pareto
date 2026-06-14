import type { IRasterizerLine } from "#rasterization/line/IRasterizerLine.ts"
import type Image from "#image/Image.ts"
import type Line from "#geometry/Line.ts"
import Rectangle from "#geometry/Rectangle.ts"

interface PipelineConfig {
	rasterizerLine?: IRasterizerLine
}

class Pipeline {
	private readonly config: PipelineConfig
	public constructor(config: PipelineConfig) {
		this.config = config
	}

	public draw(primitive: Line | Rectangle, img: Image): void {
		if (!this.config.rasterizerLine) {
			throw new Error("Pipeline requires a rasterizerLine to draw Line primitives.")
		}
		if (primitive instanceof Rectangle) {
			for (const line of primitive.toLines()) {
				this.draw(line, img)
			}
			return
		}
		this.config.rasterizerLine.drawLine(primitive, img)
	}
}

export default Pipeline
