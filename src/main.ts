import Vector2 from "mwpjs/Vector2";
import p5 from "p5";
import ImageObject from "./geometry/ImageObject";
import Color from "./image/Color";
import P5Renderer from "./renderer/P5Renderer";
import Scene from "./scene/Scene";
import Image from "./image/Image";
import { Pipeline } from "./pipeline/Pipeline";
import LineDDA from "./rasterization/LineDDA";

const sketch = (p: p5) => {
	let scene: Scene;
	const CANVAS_WIDTH = 800;
	const CANVAS_HEIGHT = 600;
	const PIXEL_SIZE = 20;
	const IMG_COLS = Math.floor(CANVAS_WIDTH / PIXEL_SIZE);
	const IMG_ROWS = Math.floor(CANVAS_HEIGHT / PIXEL_SIZE);
	const pipeline = new Pipeline(new LineDDA());
	p.setup = () => {
		p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		const renderer = new P5Renderer(p);
		scene = new Scene(renderer);
		const canvas = new Image(IMG_COLS, IMG_ROWS, PIXEL_SIZE);
		canvas.fill(new Color(30, 30, 80, 255));
		pipeline.drawLine(
			canvas,
			new Vector2(0, 0),
			new Vector2(IMG_COLS - 1, IMG_ROWS - 1),
			new Color(255, 80, 0, 255),
		);
		scene.add(new ImageObject(canvas, new Vector2(0, 0)));
	};

	p.draw = () => {
		scene.render();
	};
};

new p5(sketch);
