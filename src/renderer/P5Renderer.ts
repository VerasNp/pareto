import type p5 from "p5";
import type IRenderer from "./IRenderer";
import type Image from "../image/Image";
import type Vector2 from "mwpjs/Vector2";

class P5Renderer implements IRenderer {
	public p: p5;
	private _imageCache;
	constructor(p: p5) {
		this.p = p;
		this._imageCache = new WeakMap();
	}

	private _buildP5Image(imagem: Image) {
		const img = this.p.createImage(imagem.cols, imagem.rows);
		img.loadPixels();
		for (let row = 0; row < imagem.rows; row++) {
			for (let col = 0; col < imagem.cols; col++) {
				const { red, green, blue, alpha } = imagem.getPixel(col, row);
				const i = 4 * (row * imagem.cols + col);
				img.pixels[i] = red;
				img.pixels[i + 1] = green;
				img.pixels[i + 2] = blue;
				img.pixels[i + 3] = alpha;
			}
		}
		img.updatePixels();
		this._imageCache.set(imagem, img);
		imagem.isDirty = false;
		return img;
	}

	public drawImage(image: Image, position: Vector2): void {
		if (image.pixelSize === 1) {
			const img = image.isDirty
				? this._buildP5Image(image)
				: (this._imageCache.get(image) ?? this._buildP5Image(image));
			this.p.image(img, position.x, position.y);
			return;
		}

		this.p.noStroke(); // ← caminho novo
		for (let row = 0; row < image.rows; row++) {
			for (let col = 0; col < image.cols; col++) {
				const { red, green, blue, alpha } = image.getPixel(col, row);
				this.p.fill(red, green, blue, alpha);
				this.p.rect(
					position.x + col * image.pixelSize,
					position.y + row * image.pixelSize,
					image.pixelSize,
					image.pixelSize,
				);
			}
		}
	}

	public clear(): void {
		this.p.background(0);
	}

	public drawLine(p1: Vector2, p2: Vector2): void {
		this.p.line(p1.x, p1.y, p2.x, p2.y);
	}

	public drawCircle(center: Vector2, radius: number): void {
		this.p.circle(center.x, center.y, radius * 2);
	}
}

export default P5Renderer;
