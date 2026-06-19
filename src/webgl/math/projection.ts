import { Matrix4 } from "mwpjs"

export function perspective(fovY: number, aspect: number, near: number, far: number): Matrix4 {
	const f = 1 / Math.tan(fovY / 2)
	const rangeInv = 1 / (near - far)
	return new Matrix4(
		f / aspect,
		0,
		0,
		0,
		0,
		f,
		0,
		0,
		0,
		0,
		(near + far) * rangeInv,
		near * far * rangeInv * 2,
		0,
		0,
		-1,
		0,
	)
}
