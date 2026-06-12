import type Vector2 from "mwpjs/Vector2"
import type Image from "../image/Image"
import type IRenderer from "../renderer/IRenderer"

class ImageObject {
	public image: Image
	public position: Vector2
	constructor(image: Image, position: Vector2) {
		this.image = image
		this.position = position
	}

	public draw(renderer: IRenderer) {
		renderer.drawImage(this.image, this.position)
	}
}

export default ImageObject
