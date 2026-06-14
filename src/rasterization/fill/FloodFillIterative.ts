import type Color from "#image/Color.ts"
import type Image from "#image/Image.ts"
import Vector2 from "mwpjs/Vector2"
import type { IFloodFill } from "./IFloodFill"

class FloodFillIterative implements IFloodFill {
	public fill(image: Image, seed: Vector2, color: Color): void {
		const target = image.getPixel(seed.x, seed.y)
		if (target.equals(color)) return
		const stack: Vector2[] = [seed]
		while (stack.length > 0) {
			const { x, y } = stack.pop()!
			if (x < 0 || x >= image.getWidth()) continue
			if (y < 0 || y >= image.getHeight()) continue
			if (!image.getPixel(x, y).equals(target)) continue
			image.setPixel(x, y, color)
			if (x + 1 < image.getWidth() && image.getPixel(x + 1, y).equals(target)) {
				stack.push(new Vector2(x + 1, y))
			}
			if (x - 1 >= 0 && image.getPixel(x - 1, y).equals(target)) {
				stack.push(new Vector2(x - 1, y))
			}
			if (y + 1 < image.getHeight() && image.getPixel(x, y + 1).equals(target)) {
				stack.push(new Vector2(x, y + 1))
			}
			if (y - 1 >= 0 && image.getPixel(x, y - 1).equals(target)) {
				stack.push(new Vector2(x, y - 1))
			}
		}
	}
}

export default FloodFillIterative
