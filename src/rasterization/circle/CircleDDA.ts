import type Color from "#image/Color.ts"
import type Vector2 from "mwpjs/Vector2"
import type { IRasterizerCircle } from "./IRasterizerCircle"
import type Image from "#image/Image.ts"

class CircleDDA implements IRasterizerCircle {
	public drawCircle(img: Image, center: Vector2, radius: number, color: Color): void {
		// incremento de θ — quanto menor, mais denso mas mais lento
		// 1/radius garante que cada pixel da circunferência seja visitado
		const deltaTheta = 1 / radius

		for (let theta = 0; theta < 2 * Math.PI; theta += deltaTheta) {
			// equações do slide: x = cx + r*cos(θ), y = cy + r*sen(θ)
			const x = Math.round(center.x + radius * Math.cos(theta))
			const y = Math.round(center.y + radius * Math.sin(theta))

			if (x >= 0 && x < img.cols && y >= 0 && y < img.rows) img.setPixel(x, y, color)
		}
	}
}

export default CircleDDA
