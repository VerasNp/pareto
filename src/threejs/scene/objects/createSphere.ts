import * as THREE from "three"
import { depth } from "three/src/nodes/display/ViewportDepthNode.js"

export function createSphere(
	radius: number,
	widthSegments: number,
	depthSegments: number,
	color?: number,
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
	const geometry = new THREE.Mesh(new THREE.SphereGeometry(radius, widthSegments, depthSegments), material)
	geometry.name = "sphere"
	geometry.castShadow = true
	geometry.receiveShadow = true
	return geometry
}
