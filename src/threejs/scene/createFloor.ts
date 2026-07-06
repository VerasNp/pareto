import * as THREE from "three"

export function createFloor(size: number, color?: number, texture?: THREE.Texture): THREE.Mesh {
	const geometry = new THREE.PlaneGeometry(size, size)
	const material = texture
		? new THREE.MeshStandardMaterial({ map: texture })
		: new THREE.MeshBasicMaterial({ color })
	const floor = new THREE.Mesh(geometry, material)
	floor.rotation.x = -Math.PI / 2
	floor.receiveShadow = true
	floor.name = "floor"
	return floor
}
