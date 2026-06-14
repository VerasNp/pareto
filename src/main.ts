import p5 from "p5"
import Image from "./image/Image"
import Color from "./image/Color"
import P5Renderer from "./renderer/P5Renderer"

const sketch = (p: p5) => {
    const WIDTH = 800
    const HEIGHT = 400
    const PIXEL_SIZE = 20
    const image = new Image(WIDTH / PIXEL_SIZE, HEIGHT / PIXEL_SIZE, PIXEL_SIZE)
    const renderer = new P5Renderer(p)
    p.setup = () => {
        p.createCanvas(WIDTH, HEIGHT)
        p.noLoop()
        image.fill(new Color(0, 0, 127, 255))
    }
    p.draw = () => {
        renderer.render(image)
    }
}

new p5(sketch)
