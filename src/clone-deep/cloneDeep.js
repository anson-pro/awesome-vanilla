function cloneDeep(source) {
	if (typeof source === 'object' && source !== null) {
		const target = Array.isArray(source) ? [] : {};
		for (const key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = cloneDeep(source[key]);
			}
		}
		return target;
	} else {
		return source;
	}
}

export default cloneDeep;
