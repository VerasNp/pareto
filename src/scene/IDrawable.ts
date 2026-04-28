import type IRenderer from "../renderer/IRenderer";

export interface IDrawable {
	draw(renderer: IRenderer): void;
}
