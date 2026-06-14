import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"
import Pipeline from "#pipeline/Pipeline.ts"
import ScanLine from "#rasterization/fill/ScanLine.ts"
import Polygon from "#geometry/Polygon.ts"
import Vector2 from "mwpjs/Vector2"

const sketch1 = (p: p5) => {
	const WIDTH = 700
	const HEIGHT = 700
	const PIXEL_SIZE = 20
	const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
	const renderer = new P5Renderer(p)
	const pipeline = new Pipeline({
		scanLine: new ScanLine(),
	})
	const uShape = new Polygon(
		[
			new Vector2(5, 5),
			new Vector2(5, 25),
			new Vector2(12, 25),
			new Vector2(12, 12),
			new Vector2(18, 12),
			new Vector2(18, 25),
			new Vector2(25, 25),
			new Vector2(25, 5),
		],
		new Color(255, 255, 0, 255),
	)
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.noLoop()
		image.fill(new Color(0, 0, 127, 255))
	}
	p.draw = () => {
		pipeline.draw(uShape, image)
		renderer.render(image)
	}
}

new p5(sketch1)
