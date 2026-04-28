import type Vector2 from "mwpjs/Vector2";
import type Image from "../image/Image";

export default interface IRenderer {
	drawImage(image: Image, position: Vector2): void;
	clear(): void;
}
