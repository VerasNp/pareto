import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"
import Pipeline from "#pipeline/Pipeline.ts"
import Vector2 from "mwpjs/Vector2"
import EllipseBresenham from "#rasterization/ellipse/EllipseBresenham.ts"
import FloodFillIterative from "#rasterization/fill/FloodFillIterative.ts"
import Circle from "#geometry/Circle.ts"
import CircleBresenham from "#rasterization/circle/CircleBresenham.ts"

const sketch1 = (p: p5) => {
	const WIDTH = 1000
	const HEIGHT = 400
	const PIXEL_SIZE = 20
	const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
	const renderer = new P5Renderer(p)
	const pipeline = new Pipeline({
		rasterizerCircle: new CircleBresenham(),
		floodFill: new FloodFillIterative(),
	})
	const ellipse = new Circle(new Vector2(12, 10), 4, new Color(255, 0, 0, 255))
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.noLoop()
		image.fill(new Color(0, 0, 127, 255))
	}
	p.draw = () => {
		pipeline.draw(ellipse, image)
		pipeline.fill(image, new Vector2(12, 10), new Color(255, 255, 0, 255))
		renderer.render(image)
	}
}

new p5(sketch1)
