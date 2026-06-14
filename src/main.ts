import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"
import Pipeline from "#pipeline/Pipeline.ts"
import Line from "#geometry/Line.ts"
import Vector2 from "mwpjs/Vector2"
import LineBresenham from "#rasterization/line/LineBresenham.ts"
import Rectangle from "#geometry/Rectangle.ts"

const sketch1 = (p: p5) => {
	const WIDTH = 800
	const HEIGHT = 400
	const PIXEL_SIZE = 20
	const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
	const renderer = new P5Renderer(p)
	const pipeline = new Pipeline({
		rasterizerLine: new LineBresenham(),
	})
	const rectangle = new Rectangle(new Vector2(0, 0), 20, 3, new Color(255, 255, 0, 255))

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.noLoop()
		image.fill(new Color(0, 0, 127, 255))
	}
	p.draw = () => {
		pipeline.draw(rectangle, image)
		renderer.render(image)
	}
}

new p5(sketch1)
