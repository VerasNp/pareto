import * as THREE from "three"

export function createBox(
	width: number,
	height: number,
	depth: number,
	color?: THREE.Color,
	texture?: THREE.Texture,
	transparentOpt?: {
		opacity: number
	},
): THREE.Mesh {
	let material: THREE.Material
	if (texture) {
		material = new THREE.MeshStandardMaterial({
			map: texture,
			transparent: transparentOpt?.opacity !== undefined,
			opacity: transparentOpt?.opacity,
		})
	} else {
		material = new THREE.MeshBasicMaterial({
			color,
			transparent: transparentOpt?.opacity !== undefined,
			opacity: transparentOpt?.opacity,
		})
	}
	const geometry = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material)
	geometry.name = "box"
	geometry.castShadow = true
	geometry.receiveShadow = true
	return geometry
}
