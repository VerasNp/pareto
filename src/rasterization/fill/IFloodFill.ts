import type Color from "#image/Color.ts"
import type Image from "#image/Image.ts"
import type Vector2 from "mwpjs/Vector2"

export interface IFloodFill {
	/**
	 * Fills an area of the image with the given color, starting from the seed point and replacing all connected pixels of the same color as the seed pixel.
	 * @param image The image to be filled
	 * @param seed The starting point for the fill operation
	 * @param color The color to fill the area with
	 */
	fill(image: Image, seed: Vector2, color: Color): void
}
