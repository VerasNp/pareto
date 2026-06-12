class Color {
	public red: number
	public green: number
	public blue: number
	public alpha: number
	constructor(red: number, green: number, blue: number, alpha: number) {
		this.red = red
		this.green = green
		this.blue = blue
		this.alpha = alpha
	}
	public equals(other: Color): boolean {
		return (
			this.red === other.red &&
			this.green === other.green &&
			this.blue === other.blue &&
			this.alpha === other.alpha
		)
	}
}

export default Color
