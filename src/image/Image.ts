import Color from "./Color";

class Image {
	public cols: number;
	public rows: number;
	public pixels: Array<Color>;
	public isDirty: boolean;
	public readonly pixelSize: number;

	constructor(cols: number, rows: number, pixelSize: number = 1) {
		this.cols = cols;
		this.rows = rows;
		this.pixels = Array.from(
			{ length: cols * rows },
			() => new Color(0, 0, 0, 1),
		);
		this.isDirty = true;
		this.pixelSize = pixelSize;
	}

	private _index(col: number, row: number): number {
		return row * this.cols + col;
	}

	public setPixel(col: number, row: number, color: Color): void {
		this.pixels[this._index(col, row)] = color;
	}

	public getPixel(col: number, row: number): Color {
		return this.pixels[this._index(col, row)];
	}

	public fill(color: Color) {
		this.pixels.fill(color);
		this.isDirty = true;
	}

	public getScreenWidth(): number {
		return this.cols * this.pixelSize;
	}
	public getScreenHeight(): number {
		return this.rows * this.pixelSize;
	}

	public screenToCol(screenX: number, originX: number = 0): number {
		return Math.floor((screenX - originX) / this.pixelSize);
	}
	public screenToRow(screenY: number, originY: number = 0): number {
		return Math.floor((screenY - originY) / this.pixelSize);
	}
}

export default Image;
