import SnakeUnit from './SnakeUnit'
import EatGenerator from './EatGenerator'

class SnakeGenerator {
	constructor(ctx, unitColor) {
		this.ctx = ctx

		this.unitColor = unitColor
		this.snakeChain = [
			new SnakeUnit(0, 0, 10, 10, this.unitColor),
			new SnakeUnit(10, 0, 10, 10, this.unitColor),
		]

		this.moveDirection = 'ArrowRight'
		this.maxWidth = 500
		this.maxHeight = 500

		this.eatGenerator = new EatGenerator(this.ctx)
		this.eatUnit = null

		document.addEventListener('keydown', e => {
			if (!e.key.includes('Arrow')) return 

			this.moveDirection = e.key
		})
	}

	render() {
		this.eatUnit = this.eatGenerator.render()

		this.snakeChain.map(unit => {
			this.ctx.fillStyle = unit.color
			this.ctx.fillRect(unit.xPos, unit.yPos, unit.width, unit.height)

			if (unit.xPos > this.maxWidth) unit.xPos = 0
			else if (unit.xPos < 0) unit.xPos = this.maxWidth - 1

			if (unit.yPos > this.maxHeight) unit.yPos = 0
			else if (unit.yPos < 0) unit.yPos = this.maxHeight - 1
		})


		let moveUnit = this.snakeChain[0]

		if (moveUnit.xPos === this.eatUnit.xPos && moveUnit.yPos === this.eatUnit.yPos) {
			this.eatUnit = this.eatGenerator.render(true)
		} else {
			this.snakeChain.pop()
		}

		if (this.moveDirection === 'ArrowLeft') moveUnit.xPos -= 10
		if (this.moveDirection === 'ArrowRight') moveUnit.xPos += 10
		if (this.moveDirection === 'ArrowUp') moveUnit.yPos -= 10
		if (this.moveDirection === 'ArrowDown') moveUnit.yPos += 10

		let s = {
			xPos: moveUnit.xPos,
			yPos: moveUnit.yPos,
			width: moveUnit.width,
			height: moveUnit.height,
			color: moveUnit.color
		}

		this.snakeChain.unshift(s)

		console.log(this.snakeChain.length)
	}
}

export default SnakeGenerator