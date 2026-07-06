import * as THREE from 'three';

export function creteObjects(objects: THREE.Mesh[]) {
	const group = new THREE.Group();
	objects.forEach((obj) => group.add(obj));
	return group;
}
