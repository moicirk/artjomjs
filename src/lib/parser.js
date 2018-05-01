class Parser {

	compile (template, data) {
		const matches = template.match(/{{(.+?)}}/g)

		let parsed = template

		matches.forEach((tag) => {
			const name = tag.match(/[a-zA-Z]+/g)
			if (typeof data[name] === 'undefined') {
				throw new Error(`Property '${name}' not found in data`)
			}
			parsed = parsed.replace(tag, data[name])
		})

		return parsed
	}
}

export default Parser
