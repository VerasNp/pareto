import type Vector2 from "mwpjs/Vector2";
import type Color from "../image/Color";
import type Image from "../image/Image";
import type { IRasterizer } from "./IRasterizer";

class LineBresenham implements IRasterizer {
	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		let p = p1
	}
}

export default LineBresenham;
