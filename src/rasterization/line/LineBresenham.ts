import Vector2 from "mwpjs/Vector2";
import type { IRasterizerLine } from "./IRasterizerLine";
import type Image from "#image/Image.ts";
import type Color from "#image/Color.ts";

class LineBresenham implements IRasterizerLine {
	public drawLine(img: Image, p1: Vector2, p2: Vector2, color: Color): void {
		let x0 = Math.round(p1.x),
			y0 = Math.round(p1.y);
		let x1 = Math.round(p2.x),
			y1 = Math.round(p2.y);

		// ── normalização para o primeiro octante ──────────────────────────

		// garante que x cresce — troca os pontos se necessário
		if (x0 > x1) {
			[x0, x1] = [x1, x0];
			[y0, y1] = [y1, y0];
		}

		let dx = x1 - x0;
		let dy = y1 - y0;

		// linha desce (dy < 0) → espelha em y, algoritmo roda como se subisse
		const flipY = dy < 0;
		if (flipY) dy = -dy;

		// inclinação > 1 → troca x e y, algoritmo roda como se fosse rasa
		const steep = dy > dx;
		if (steep) {
			[x0, y0] = [y0, x0];
			[x1, y1] = [y1, x1];
			[dx, dy] = [dy, dx];
		}

		// ── algoritmo do primeiro octante ────────────────────────────────

		const a = dy;
		const b = -dx;

		const P = { x: x0, y: y0 };
		let dM = a + b / 2;

		for (; P.x <= x1; P.x++) {
			this.plot(img, P.x, P.y, color, steep, flipY);

			if (dM > 0) {
				P.y++;
				dM += a + b;
			} else {
				dM += a;
			}
		}
	}

	private plot(
		img: Image,
		x: number,
		y: number,
		color: Color,
		steep: boolean,
		flipY: boolean,
	): void {
		// desfaz espelho em y
		if (flipY) y = -y;

		// desfaz troca de eixos
		const col = steep ? y : x;
		const row = steep ? x : y;

		if (col >= 0 && col < img.cols && row >= 0 && row < img.rows)
			img.setPixel(col, row, color);
	}
}

export default LineBresenham;
