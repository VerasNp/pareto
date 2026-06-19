class ShaderProgram {
	public readonly program: WebGLProgram
	public readonly gl: WebGLRenderingContext

	public constructor(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
		this.gl = gl
		const vertexShader = this._compile(this.gl.VERTEX_SHADER, vertexSource)
		const fragmentShader = this._compile(this.gl.FRAGMENT_SHADER, fragmentSource)
		const program = this.gl.createProgram()
		if (!program) {
			throw new Error("Failed to create shader program.")
		}
		this.gl.attachShader(program, vertexShader)
		this.gl.attachShader(program, fragmentShader)
		this.gl.linkProgram(program)
		if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
			const info = this.gl.getProgramInfoLog(program)
			this.gl.deleteProgram(program)
			throw new Error(`Failed to link shader program: ${info}`)
		}
		this.program = program
	}

	private _compile(type: number, source: string): WebGLShader {
		const shader = this.gl.createShader(type)
		if (!shader) {
			throw new Error("Failed to create shader.")
		}
		this.gl.shaderSource(shader, source)
		this.gl.compileShader(shader)
		if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
			const info = this.gl.getShaderInfoLog(shader)
			this.gl.deleteShader(shader)
			throw new Error(`Failed to compile shader: ${info}`)
		}
		return shader
	}

	public use(): void {
		this.gl.useProgram(this.program)
	}

	public getAttribLocation(name: string): number {
		return this.gl.getAttribLocation(this.program, name)
	}

	public getUniformLocation(name: string): WebGLUniformLocation {
		const location = this.gl.getUniformLocation(this.program, name)
		if (!location) {
			throw new Error(`Uniform "${name}" não encontrado`)
		}
		return location
	}
}

export default ShaderProgram
