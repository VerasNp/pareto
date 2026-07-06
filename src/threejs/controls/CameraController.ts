import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export class CameraController {
	private _orbit: OrbitControls
	private _camera: THREE.PerspectiveCamera
	private _domElement: HTMLElement

	private _keys: Record<string, boolean> = {}

	public constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
		this._camera = camera
		this._domElement = domElement
		this._orbit = new OrbitControls(this._camera, this._domElement)
		this._orbit.enableDamping = true
		this._orbit.dampingFactor = 0.08
		this._orbit.minDistance = 3
		this._orbit.maxDistance = 60
		this._orbit.maxPolarAngle = Math.PI / 2 - 0.02
		this._orbit.target.set(0, 1.5, 0)

		window.addEventListener("keydown", (e) => (this._keys[e.code] = true))
		window.addEventListener("keyup", (e) => (this._keys[e.code] = false))
	}

	public update(): void {
		this._orbit.update()
	}
}
