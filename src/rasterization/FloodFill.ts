import type Color from "../image/Color";
import type Image from "../image/Image";

class FloodFill {
	public fillRegion(img: Image, x: number, y: number, color: Color): void {
		const oldColor = img.getPixel(x, y);
		if (oldColor && !oldColor.equals(color)) {
			this.fill(img, x, y, oldColor, color);
		}
	}
	public fill(
		img: Image,
		x: number,
		y: number,
		oldColor: Color,
		newColor: Color,
	): void {
		const pixel = img.getPixel(x, y);
		if (!pixel) return;
		img.setPixel(x, y, newColor);
		if (x > 0 && img.getPixel(x - 1, y)?.equals(oldColor)) {
			setTimeout(() => {
				this.fill(img, x - 1, y, oldColor, newColor);
			}, 100);
		} else if (
			x < img.getScreenWidth() - 1 &&
			img.getPixel(x + 1, y)?.equals(oldColor)
		) {
			setTimeout(() => {
				this.fill(img, x + 1, y, oldColor, newColor);
			}, 100);
		} else if (y > 0 && img.getPixel(x, y - 1)?.equals(oldColor)) {
			setTimeout(() => {
				this.fill(img, x, y - 1, oldColor, newColor);
			}, 100);
		} else if (
			y < img.getScreenHeight() - 1 &&
			img.getPixel(x, y + 1)?.equals(oldColor)
		) {
			setTimeout(() => {
				this.fill(img, x, y + 1, oldColor, newColor);
			}, 100);
		}
	}
}

export default FloodFill;
