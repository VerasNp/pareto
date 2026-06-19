import { Angle } from "mwpjs"
import ShaderProgram from "./core/ShaderProgram"
import WebGLContext from "./core/WebGLContext"
import CubeMesh from "./geometry/CubeMesh"
import { perspective } from "./math/projection"
import { rotationX, rotationY, translation } from "./math/transforms"

class CubeRenderer {
	private readonly context: WebGLContext
	private readonly shader: ShaderProgram
	private readonly buffers: ReturnType<WebGLContext["createMeshBuffer"]>
	private readonly aPosition: number
	private readonly aColor: number
	private readonly uModel: WebGLUniformLocation
	private readonly uView: WebGLUniformLocation
	private readonly uProjection: WebGLUniformLocation

	private angle = 0

	public constructor(canvas: HTMLCanvasElement, vertexSource: string, fragmentSource: string) {
		this.context = new WebGLContext(canvas)
		this.shader = new ShaderProgram(this.context.gl, vertexSource, fragmentSource)
		const mesh = CubeMesh.create()
		this.buffers = this.context.createMeshBuffer(mesh)
		this.aPosition = this.shader.getAttribLocation("aPosition")
		this.aColor = this.shader.getAttribLocation("aColor")
		this.uModel = this.shader.getUniformLocation("uModel")
		this.uView = this.shader.getUniformLocation("uView")
		this.uProjection = this.shader.getUniformLocation("uProjection")
	}

	public start(): void {
		requestAnimationFrame(this._renderLoop)
	}

	private _renderLoop = (): void => {
		this.angle += 0.01
		this._render()
		requestAnimationFrame(this._renderLoop)
	}

	private _render(): void {
		const gl = this.context.gl
		this.context.clear(0.1, 0.1, 0.15, 1.0)
		this.shader.use()
		const model = rotationY(this.angle).multByMatrix(rotationX(this.angle * 0.5))
		const view = translation(0, 0, -5)
		const projection = perspective(
			Angle.degreesToRadians(60),
			gl.canvas.width / gl.canvas.height,
			0.1,
			100,
		)
		gl.uniformMatrix4fv(this.uModel, false, new Float32Array(model.toArray()))
		gl.uniformMatrix4fv(this.uView, false, new Float32Array(view.toArray()))
		gl.uniformMatrix4fv(this.uProjection, false, new Float32Array(projection.toArray()))
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position)
		gl.vertexAttribPointer(this.aPosition, 3, gl.FLOAT, false, 0, 0)
		gl.enableVertexAttribArray(this.aPosition)
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color)
		gl.vertexAttribPointer(this.aColor, 3, gl.FLOAT, false, 0, 0)
		gl.enableVertexAttribArray(this.aColor)
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.index)
		gl.drawElements(gl.TRIANGLES, this.buffers.indexCount, gl.UNSIGNED_SHORT, 0)
	}
}

export default CubeRenderer
