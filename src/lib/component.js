import Parser from './parser'

class Component {
	constructor (name, config) {
		this._config = config
		this._parser = new Parser()

		this.name = name
		this.data = config.data()
		this.element = document.getElementsByTagName(name)[0]
		this.template = config.template
	}

	render () {
		console.log("RENDER")
		this.element.innerHTML = this._parser.compile(this.template, this.data)
		this.setListeners()
	}

	setListeners () {
		console.log("LISTENERS")
		const nodes = this.element.querySelectorAll('[a-value]')
		nodes.forEach((input) => {
			const dataProp = input.getAttribute('a-value')
			input.oninput = (e) => {
				this.data[dataProp] = e.target.value
				this.render()
			}
		})
	}
}

export default Component
