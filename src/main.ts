import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"
import Pipeline from "#pipeline/Pipeline.ts"
import Line from "#geometry/Line.ts"
import Vector2 from "mwpjs/Vector2"
import LineBresenham from "#rasterization/line/LineBresenham.ts"
import Rectangle from "#geometry/Rectangle.ts"
import CircleDDA from "#rasterization/circle/CircleDDA.ts"
import Circle from "#geometry/Circle.ts"
import CircleBresenham from "#rasterization/circle/CircleBresenham.ts"

const sketch1 = (p: p5) => {
	const WIDTH = 800
	const HEIGHT = 400
	const PIXEL_SIZE = 20
	const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
	const renderer = new P5Renderer(p)
	const pipeline = new Pipeline({
		rasterizerCircle: new CircleBresenham(),
	})
	const circle = new Circle(new Vector2(10, 10), 5, new Color(255, 0, 0, 255))

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.noLoop()
		image.fill(new Color(0, 0, 127, 255))
	}
	p.draw = () => {
		pipeline.draw(circle, image)
		renderer.render(image)
	}
}

new p5(sketch1)
