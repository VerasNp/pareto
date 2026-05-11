import p5 from "p5";
import Color from "./image/Color";
import P5Renderer from "./renderer/P5Renderer";
import Scene from "./scene/Scene";
import Image from "./image/Image";
import Line from "#geometry/Line.ts";
import Vector2 from "mwpjs/Vector2";

const sketch = (p: p5) => {
	let scene: Scene;
	const CANVAS_WIDTH = 800;
	const CANVAS_HEIGHT = 600;
	const PIXEL_SIZE = 20;
	const IMG_COLS = Math.floor(CANVAS_WIDTH / PIXEL_SIZE);
	const IMG_ROWS = Math.floor(CANVAS_HEIGHT / PIXEL_SIZE);
	p.setup = () => {
		p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		const renderer = new P5Renderer(p);
		scene = new Scene(renderer);
		const canvas = new Image(IMG_COLS, IMG_ROWS, PIXEL_SIZE);
		canvas.fill(new Color(30, 30, 80, 255));
		const line = new Line(
			new Vector2(10, 10),
			new Vector2(30, 20),
			new Color(255, 0, 0, 255),
		);
		scene.add(line);
	};

	p.draw = () => {
		scene.render();
	};
};

new p5(sketch);
