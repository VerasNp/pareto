import type { TriangleMesh } from "#webgl/geometry/TriangleMesh.ts"
import type { MeshBuffers } from "./MeshBuffers"

class WebGLContext {
	public readonly gl: WebGLRenderingContext

	public constructor(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl") as WebGLRenderingContext | null
		if (!gl) {
			throw new Error("WebGL is not supported in this browser.")
		}
		this.gl = gl
	}

	private _createBuffer(target: number, data: Float32Array | Uint16Array): WebGLBuffer {
		const buffer = this.gl.createBuffer()
		if (!buffer) {
			throw new Error("Failed to create WebGL buffer.")
		}
		this.gl.bindBuffer(target, buffer)
		this.gl.bufferData(target, data, this.gl.STATIC_DRAW)
		return buffer
	}

	public clear(r: number, g: number, b: number, a: number): void {
		this.gl.clearColor(r, g, b, a)
		this.gl.enable(this.gl.DEPTH_TEST)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
	}

	public createMeshBuffer(mesh: TriangleMesh): MeshBuffers {
		const position = this._createBuffer(this.gl.ARRAY_BUFFER, mesh.positions)
		const color = this._createBuffer(this.gl.ARRAY_BUFFER, mesh.colors)
		const index = this._createBuffer(this.gl.ELEMENT_ARRAY_BUFFER, mesh.indices)
		return { position, color, index, indexCount: mesh.indices.length }
	}
}

export default WebGLContext
