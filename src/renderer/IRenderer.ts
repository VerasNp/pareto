import type Image from "#image/Image.ts"

export default interface IRenderer {
	/**
	 * Clear the rendering surface
	 */
	clear(): void
	/**
	 * Render the given image on the rendering surface
	 * @param image Image to be rendered
	 */
	render(image: Image): void
}
