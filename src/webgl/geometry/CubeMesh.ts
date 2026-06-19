import type { TriangleMesh } from "./TriangleMesh"

/**
 * A cube mesh with 8 vertices, 12 triangles, and 6 faces. Each face has a different color.
 */
class CubeMesh {
	public static create(): TriangleMesh {
		const positions = new Float32Array([
			-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1,
			1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1,
			-1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1,
		])
		const colors = new Float32Array([
			1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
			1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
			0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
		])
		const indices = new Uint16Array([
			0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17,
			18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
		])
		return { positions, colors, indices }
	}
}

export default CubeMesh
