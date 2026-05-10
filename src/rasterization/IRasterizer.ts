import type Vector2 from "mwpjs/Vector2";
import type Color from "../image/Color";
import type Image from "../image/Image";

export interface IRasterizer {
	drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void;
}
