import CubeRenderer from "./webgl/CubeRenderer"
import vertexShaderSource from "./webgl/shaders/cube.vert.glsl"
import fragmentShaderSource from "./webgl/shaders/cube.frag.glsl"

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!
const renderer = new CubeRenderer(canvas, vertexShaderSource, fragmentShaderSource)
renderer.start()
