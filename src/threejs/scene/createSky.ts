import * as THREE from "three"

export function createSky(vertShader: string, fragShader: string): THREE.Mesh {
	const geometry = new THREE.SphereGeometry(500, 32, 15)

	const material = new THREE.ShaderMaterial({
		uniforms: {
			topColor: { value: new THREE.Color(0x4a90e2) },
			bottomColor: { value: new THREE.Color(0xdff2ff) },
			offset: { value: 20 },
			exponent: { value: 0.7 },
		},
		vertexShader: vertShader,
		fragmentShader: fragShader,
		side: THREE.BackSide,
	})
	const sky = new THREE.Mesh(geometry, material)
	sky.name = "sky"
	return sky
}
