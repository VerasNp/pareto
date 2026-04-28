import type Color from "../image/Color";
import type Image from "../image/Image";
import type Vector2 from "../math/Vector2";

export interface IRasterizer {
	drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void;
}
