import App from "#threejs/core/App.ts"
import vertexShaderSource from "./webgl/shaders/sky.vert.glsl"
import fragmentShaderSource from "./webgl/shaders/sky.frag.glsl"

const canvas = document.querySelector<HTMLCanvasElement>("#app")!
const app = new App(canvas, {
	sky: {
		vertShader: vertexShaderSource,
		fragShader: fragmentShaderSource,
	},
})
app.start()
