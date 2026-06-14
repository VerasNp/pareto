import type { IRasterizerLine } from "#rasterization/line/IRasterizerLine.ts"
import type Image from "#image/Image.ts"
import type Line from "#geometry/Line.ts"

interface PipelineConfig {
	rasterizerLine?: IRasterizerLine
}

class Pipeline {
	private readonly config: PipelineConfig
	public constructor(config: PipelineConfig) {
		this.config = config
	}

	public draw(line: Line, img: Image): void {
		if (!this.config.rasterizerLine) throw new Error("No line rasterizer provided")

		if (!line) return

		this.config.rasterizerLine.drawLine(line, img)
	}
}

export default Pipeline
