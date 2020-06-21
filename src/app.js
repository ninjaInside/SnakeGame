import SnakeGenerator from './components/SnakeGenerator'

class SnakeGame {
	constructor(fColor, sColor) {
		this.canvas = document.querySelector('.canvas')
		this.ctx = this.canvas.getContext('2d')
		this.fieldColor = typeof fColor === 'string' ? fColor : '#000'
		this.fieldWidth = 500
		this.fieldHeight = 500

		this.renderCycle = null
		this.framerate = 100

		this.snakeGenerator = new SnakeGenerator(this.ctx, sColor)
	}

	render() {
		this.renderCycle = setInterval(() => {
			this.ctx.fillStyle = this.fieldColor
			this.ctx.fillRect(0, 0, this.fieldWidth, this.fieldHeight)

			this.snakeGenerator.render()
		}, this.framerate)
	}

	renderStop() {

	}

	init() {
		this.canvas.width = this.fieldWidth
		this.canvas.height = this.fieldHeight

		this.render()
	}
}

let snake = new SnakeGame('#000', 'green')

snake.init()