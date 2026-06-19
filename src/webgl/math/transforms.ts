import { Matrix4 } from "mwpjs"

export function translation(x: number, y: number, z: number): Matrix4 {
	return new Matrix4(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1)
}

export function scaling(x: number, y: number, z: number): Matrix4 {
	return new Matrix4(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1)
}

export function rotationX(angle: number): Matrix4 {
	const c = Math.cos(angle)
	const s = Math.sin(angle)
	return new Matrix4(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1)
}

export function rotationY(angle: number): Matrix4 {
	const c = Math.cos(angle)
	const s = Math.sin(angle)
	return new Matrix4(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1)
}

export function rotationZ(angle: number): Matrix4 {
	const c = Math.cos(angle)
	const s = Math.sin(angle)
	return new Matrix4(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
}
