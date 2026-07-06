import * as THREE from "three"

export interface SceneLights {
	ambient: THREE.AmbientLight
	sun: THREE.DirectionalLight
	point: THREE.PointLight
	spot: THREE.SpotLight
	group: THREE.Group
}

export default function createLights(): SceneLights {
	const group = new THREE.Group()

	const ambient = new THREE.AmbientLight(0x8090a0, 0.35)

	const sun = new THREE.DirectionalLight(0xfff2d0, 1.2)
	sun.position.set(15, 25, 10)
	sun.castShadow = true
	sun.shadow.mapSize.set(2048, 2048)
	sun.shadow.camera.left = -30
	sun.shadow.camera.right = 30
	sun.shadow.camera.top = 30
	sun.shadow.camera.bottom = -30
	sun.shadow.camera.near = 1
	sun.shadow.camera.far = 80
	sun.shadow.bias = -0.0015

	const point = new THREE.PointLight(0xff6a3d, 15, 25, 2)
	point.position.set(-6, 4, -4)
	point.castShadow = true
	point.shadow.mapSize.set(1024, 1024)

	const spot = new THREE.SpotLight(0x66d9ff, 25, 30, Math.PI / 7, 0.35, 1.5)
	spot.position.set(6, 10, 6)
	spot.castShadow = true
	spot.shadow.mapSize.set(1024, 1024)

	const spotTarget = new THREE.Object3D()
	spotTarget.position.set(2, 0, 0)
	group.add(spotTarget)
	spot.target = spotTarget

	group.add(ambient, sun, point, spot)

	return { ambient, sun, point, spot, group }
}
