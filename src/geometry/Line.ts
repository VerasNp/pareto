import type Vector2 from "mwpjs/Vector2";
import type IRenderer from "../renderer/IRenderer";

class Line {
	public p1: Vector2;
	public p2: Vector2;

	constructor(p1: Vector2, p2: Vector2) {
		this.p1 = p1;
		this.p2 = p2;
	}

	public length(): number {
		throw new Error("Method not implemented.");
	}

	

	public draw(renderer: IRenderer): void {}
}
