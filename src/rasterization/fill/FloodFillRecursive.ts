import type Vector2 from "mwpjs/Vector2"
import type Color from "../../image/Color"
import type Image from "../../image/Image"
import type { IFloodFill } from "./IFloodFill"

class FloodFillRecursive implements IFloodFill {
	public fill(img: Image, seed: Vector2, color: Color): void {
		const oldColor = img.getPixel(seed.x, seed.y)
		if (!oldColor.equals(color)) {
			this._fill(img, seed.x, seed.y, oldColor, color)
		}
	}

	private _fill(img: Image, x: number, y: number, oldColor: Color, newColor: Color): void {
		if (x < 0 || x >= img.getWidth()) return
		if (y < 0 || y >= img.getHeight()) return
		if (!img.getPixel(x, y).equals(oldColor)) return
		img.setPixel(x, y, newColor)
		this._fill(img, x + 1, y, oldColor, newColor)
		this._fill(img, x - 1, y, oldColor, newColor)
		this._fill(img, x, y + 1, oldColor, newColor)
		this._fill(img, x, y - 1, oldColor, newColor)
	}
}

export default FloodFillRecursive
