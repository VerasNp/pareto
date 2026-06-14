import type Circle from "#geometry/Circle.ts"
import type Image from "#image/Image.ts"

export interface IRasterizerCircle {
	drawCircle(circle: Circle, img: Image): void
}
