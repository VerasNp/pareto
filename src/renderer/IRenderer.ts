import type Image from "#image/Image.ts";
import type Vector2 from "mwpjs/Vector2";

export default interface IRenderer {
	clear(): void;
	drawLine(p1: Vector2, p2: Vector2): void;
	drawCircle(center: Vector2, radius: number): void;
	drawImage(image: Image, position: Vector2): void;
}
