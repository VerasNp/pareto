import { describe, it } from "vitest"
import Image from "#image/Image.ts"
import Color from "#image/Color.ts"

describe("Image", () => {
	it("should create an image with the specified dimensions and pixel size", () => {
		const image = new Image(10, 20, 2)
		expect(image.cols).toBe(10)
		expect(image.rows).toBe(20)
		expect(image.pixelSize).toBe(2)
		expect(image.pixels.length).toBe(200) // 10 cols * 20 rows
		expect(image.isDirty).toBe(true)
	})

	it("Should get index of pixel correctly", () => {
		const image = new Image(10, 20)
		expect(image["_index"](0, 0)).toBe(0)
		expect(image["_index"](1, 0)).toBe(1)
		expect(image["_index"](0, 1)).toBe(10)
		expect(image["_index"](5, 5)).toBe(55)
		expect(image["_index"](9, 19)).toBe(199)
	})

	it("should set a specific color value to pixel and retrieve it correctly", () => {
		const image = new Image(10, 20)
		const color = new Color(255, 0, 0, 1)
		image.setPixel(5, 5, color)
		expect(image.getPixel(5, 5)).toEqual(color)
	})

	it("should fill the entire image with a specific color", () => {
		const image = new Image(10, 20)
		const color = new Color(0, 255, 0, 1)
		image.fill(color)
		for (let col = 0; col < image.cols; col++) {
			for (let row = 0; row < image.rows; row++) {
				expect(image.getPixel(col, row)).toEqual(color)
			}
		}
		expect(image.isDirty).toBe(true)
	})

	it("should convert screen coordinates to column and row indices correctly", () => {
		const image = new Image(10, 20, 2)
		expect(image.screenToCol(0)).toBe(0)
		expect(image.screenToCol(1)).toBe(0)
		expect(image.screenToCol(2)).toBe(1)
		expect(image.screenToCol(19)).toBe(9)
		expect(image.screenToCol(20)).toBe(10) // Out of bounds
		expect(image.screenToRow(0)).toBe(0)
		expect(image.screenToRow(1)).toBe(0)
		expect(image.screenToRow(2)).toBe(1)
		expect(image.screenToRow(39)).toBe(19)
		expect(image.screenToRow(40)).toBe(20) // Out of bounds
	})
})
