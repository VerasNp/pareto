import type Ellipse from "#geometry/Ellipse.ts"
import type Image from "#image/Image.ts"

export interface IRasterizerEllipse {
	drawEllipse(ellipse: Ellipse, image: Image): void
}
