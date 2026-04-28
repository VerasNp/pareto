import type Vector2 from "mwpjs/Vector2";
import type { IRasterizer } from "../rasterization/IRasterizer";
import type Image from "../image/Image";
import type Color from "../image/Color";

export class Pipeline {
	private readonly _rasterizer: IRasterizer;
	constructor(rasterizer: IRasterizer) {
		this._rasterizer = rasterizer;
	}

	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		this._rasterizer.drawLine(img, p1, p2, color);
	}
}
