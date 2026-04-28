import type IRenderer from "../renderer/IRenderer";
import type { IDrawable } from "./IDrawable";

class Scene {
	private readonly drawables: IDrawable[] = [];
	private readonly renderer: IRenderer;

	constructor(renderer: IRenderer) {
		this.renderer = renderer;
	}

	add(obj: IDrawable): this {
		this.drawables.push(obj);
		return this;
	}

	render(): void {
		this.renderer.clear();
		for (const obj of this.drawables) {
			obj.draw(this.renderer);
		}
	}
}

export default Scene;
