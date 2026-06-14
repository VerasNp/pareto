import Color from "./Color"

class Image {
	public cols: number
	public rows: number
	public pixels: Array<Color>
	public isDirty: boolean
	public readonly pixelSize: number

	public constructor(cols: number, rows: number, pixelSize: number = 1) {
		this.cols = cols
		this.rows = rows
		this.pixels = Array.from({ length: cols * rows }, () => new Color(0, 0, 0, 1))
		this.isDirty = true
		this.pixelSize = pixelSize
	}

	/**
	 * Calculate the index in the pixels array for a given column and row
	 * @param col Columns index of the pixel
	 * @param row Row index of the pixel
	 * @returns Index in the pixels array corresponding to the specified column and row
	 */
	private _index(col: number, row: number): number {
		return row * this.getWidth() + col
	}

	/**
	 * Set a specific color value to pixel
	 * @param col Columns index of the pixel
	 * @param row Row index of the pixel
	 * @param color RGBA color
	 */
	public setPixel(col: number, row: number, color: Color): void {
		this.pixels[this._index(col, row)] = color
		this.isDirty = true
	}

	/**
	 * Get the color value of a specific pixel
	 * @param col Columns index of the pixel
	 * @param row Row index of the pixel
	 * @returns RGBA color of the pixel
	 */
	public getPixel(col: number, row: number): Color {
		return this.pixels[this._index(col, row)]
	}

	/**
	 * Fill the entire image with a specific color
	 * @param color RGBA color to fill the image with
	 */
	public fill(color: Color) {
		this.pixels.fill(color)
		this.isDirty = true
	}

	/**
	 * Get the width of the screen
	 * @returns Width of the screen in pixels
	 */
	public getScreenWidth(): number {
		return this.cols * this.pixelSize
	}

	/**
	 * Get the height of the screen
	 * @returns Height of the screen in pixels
	 */
	public getScreenHeight(): number {
		return this.rows * this.pixelSize
	}

	/**
	 * Convert screen coordinates to column index
	 * @param screenX X coordinate on the screen
	 * @param originX X coordinate of the origin (default is 0)
	 * @returns Column index corresponding to the screen X coordinate
	 */
	public screenToCol(screenX: number, originX: number = 0): number {
		return Math.floor((screenX - originX) / this.pixelSize)
	}

	/**
	 * Convert screen coordinates to row index
	 * @param screenY Y coordinate on the screen
	 * @param originY Y coordinate of the origin (default is 0)
	 * @returns Row index corresponding to the screen Y coordinate
	 */
	public screenToRow(screenY: number, originY: number = 0): number {
		return Math.floor((screenY - originY) / this.pixelSize)
	}

	/**
	 * Get the image width in pixels
	 * @returns Width of the image in pixels
	 */
	public getWidth(): number {
		return this.cols
	}

	/**
	 * Get the image height in pixels
	 * @returns Height of the image in pixels
	 */
	public getHeight(): number {
		return this.rows
	}
}

export default Image
