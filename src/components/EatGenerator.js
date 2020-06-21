import EatUnit from './EatUnit'

import randomPos from '../modules/randomPos' 

class EatGenerator {
	constructor(ctx) {
		this.eatUnit = new EatUnit(randomPos(1000), randomPos(1000))

		this.ctx = ctx
	}

	render(isRerender) {
		this.ctx.fillStyle = 1

		if (isRerender) {
			this.eatUnit.xPos = randomPos(500)
			this.eatUnit.yPos = randomPos(500)
		}

		this.ctx.fillStyle = this.eatUnit.color 
		this.ctx.fillRect(this.eatUnit.xPos, this.eatUnit.yPos, this.eatUnit.width, this.eatUnit.height)
	}
}

export default EatGenerator 