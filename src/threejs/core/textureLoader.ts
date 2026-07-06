import * as THREE from "three"

export function loadTexture(url: string): THREE.Texture {
	const loader = new THREE.TextureLoader()
	return loader.load(url)
}
