class EatUnit {
	constructor(xPos, yPos, width, height, color) {
		this.xPos = xPos || 0
		this.yPos = yPos || 0

		this.width = width || 10
		this.height = height || 10

		this.color = color || 'red'
	}
}

export default EatUnit 