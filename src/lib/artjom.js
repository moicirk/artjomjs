import Component from './component'

class ArtjomJS {
	constructor (config) {
		this.config = config

		this._components = {};

		this.render()
	}

	render () {
		Object.keys(this.config.components).forEach((componentName) => {
			this.createComponent(componentName, this.config.components[componentName])
		})
	}

	createComponent (name, config) {
		this._components[name] = new Component(name, config)
		this._components[name].render()
	}
}

export default ArtjomJS
