import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"
import Pipeline from "#pipeline/Pipeline.ts"
import Ellipse from "#geometry/Ellipse.ts"
import Vector2 from "mwpjs/Vector2"
import EllipseBresenham from "#rasterization/ellipse/EllipseBresenham.ts"

const sketch1 = (p: p5) => {
	const WIDTH = 1000
	const HEIGHT = 400
	const PIXEL_SIZE = 20
	const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
	const renderer = new P5Renderer(p)
	const pipeline = new Pipeline({
		rasterizerEllipse: new EllipseBresenham(),
	})
	const ellipse = new Ellipse(new Vector2(12, 10), 10, 3, new Color(255, 0, 0, 255))

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.noLoop()
		image.fill(new Color(0, 0, 127, 255))
	}
	p.draw = () => {
		pipeline.draw(ellipse, image)
		renderer.render(image)
	}
}

new p5(sketch1)
