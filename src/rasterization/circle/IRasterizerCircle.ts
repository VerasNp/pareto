import type Color from "#image/Color.ts";
import type Image from "#image/Image.ts";
import type Vector2 from "mwpjs/Vector2";

export interface IRasterizerCircle {
	drawCircle(img: Image, center: Vector2, radius: number, color: Color): void;
}
