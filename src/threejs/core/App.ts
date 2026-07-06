import { createFloor } from "#threejs/scene/createFloor.ts"
import { createSky } from "#threejs/scene/createSky.ts"
import { createBox } from "#threejs/scene/objects/createBox.ts"
import * as THREE from "three"
import { loadTexture } from "./textureLoader"
import createLights, { type SceneLights } from "#threejs/scene/createLights.ts"
import { CameraController } from "#threejs/controls/CameraController.ts"
import { createSphere } from "#threejs/scene/objects/createSphere.ts"

class App {
	private _renderer: THREE.WebGLRenderer
	private _container: HTMLElement
	private _camera: THREE.PerspectiveCamera
	private _scene: THREE.Scene
	private _lights: SceneLights
	private _cameraController: CameraController

	public constructor(
		container: HTMLElement,
		options?: { sky?: { vertShader: string; fragShader: string } },
	) {
		this._container = container
		this._scene = new THREE.Scene()
		this._camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		)
		this._camera.position.set(0, 2, 5)
		this._renderer = new THREE.WebGLRenderer({ antialias: true })
		this._renderer.setSize(window.innerWidth, window.innerHeight)
		this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		this._renderer.shadowMap.enabled = true
		this._renderer.shadowMap.type = THREE.PCFSoftShadowMap
		this._renderer.outputColorSpace = THREE.SRGBColorSpace
		this._renderer.toneMapping = THREE.ACESFilmicToneMapping
		this._renderer.toneMappingExposure = 1.05
		this._container.appendChild(this._renderer.domElement)

		if (options?.sky) {
			this._scene.add(createSky(options.sky.vertShader, options.sky.fragShader))
		}

		const floor = createFloor(
			10,
			undefined,
			loadTexture(
				"/public/textures/rocky-rugged-terrain-ue/rocky-rugged-terrain_1_albedo.png",
			),
		)
		this._scene.add(floor)

		const box1 = createBox(1, 1, 1, undefined, loadTexture("/public/textures/grass.png"))
		box1.position.set(0, 0.5, 0)
		this._scene.add(box1)
		const transparentBox = createBox(1, 1, 1, new THREE.Color("red"), undefined, {
			opacity: 0.5,
		})
		transparentBox.position.set(2, 0.5, 0)
		this._scene.add(transparentBox)

		const sphere = createSphere(
			0.5,
			32,
			32,
			undefined,
			loadTexture("/public/textures/red-scifi-metal-ue/red-scifi-metal_albedo.png"),
		)
		sphere.position.set(-2, 0.5, 0)
		this._scene.add(sphere)

		this._lights = createLights()
		this._scene.add(this._lights.group)

		this._cameraController = new CameraController(this._camera, this._renderer.domElement)

		this._registerEventListeners()
		window.addEventListener("resize", () => this._onResize())
	}

	public start(): void {
		this._renderer.setAnimationLoop(() => this._renderer.render(this._scene, this._camera))
	}

	private _registerEventListeners(): void {
		window.addEventListener("keydown", (e) => {
			if (e.code === "Digit1") this._lights.ambient.visible = !this._lights.ambient.visible
			if (e.code === "Digit2") this._lights.sun.visible = !this._lights.sun.visible
			if (e.code === "Digit3") this._lights.point.visible = !this._lights.point.visible
			if (e.code === "Digit4") this._lights.spot.visible = !this._lights.spot.visible
		})
	}

	private _onResize(): void {
		this._camera.aspect = window.innerWidth / window.innerHeight
		this._camera.updateProjectionMatrix()
		this._renderer.setSize(window.innerWidth, window.innerHeight)
	}
}

export default App
