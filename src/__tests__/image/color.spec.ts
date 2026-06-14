import Color from "#image/Color.ts"
import { describe } from "vitest"

describe("Color", () => {
	it("should create a color with the specified RGBA values", () => {
		const color = new Color(255, 0, 0, 1)
		expect(color.red).toBe(255)
		expect(color.green).toBe(0)
		expect(color.blue).toBe(0)
		expect(color.alpha).toBe(1)
	})

	it("should compare two colors for equality correctly", () => {
		const color1 = new Color(255, 0, 0, 1)
		const color2 = new Color(255, 0, 0, 1)
		const color3 = new Color(0, 255, 0, 1)
		expect(color1.equals(color2)).toBe(true)
		expect(color1.equals(color3)).toBe(false)
	})
})
