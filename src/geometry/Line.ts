import type Vector2 from "mwpjs/Vector2";
import type IRenderer from "../renderer/IRenderer";
import type { IDrawable } from "#scene/IDrawable.ts";
import type Color from "#image/Color.ts";

class Line implements IDrawable {
	public p1: Vector2;
	public p2: Vector2;
	public color: Color;

	constructor(p1: Vector2, p2: Vector2, color: Color) {
		this.p1 = p1;
		this.p2 = p2;
		this.color = color;
	}

	public length(): number {
		throw new Error("Method not implemented.");
	}

	public draw(renderer: IRenderer): void {
		renderer.drawLine(this.p1, this.p2);
	}
}

export default Line;
