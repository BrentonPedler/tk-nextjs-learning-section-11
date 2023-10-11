const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'brenton',
				mongodb_password: 'brenton',
				mongodb_clustername: 'cluster0',
			}
		}
	}
	return {
		env: {
			mongodb_username: 'brenton',
			mongodb_password: 'brenton',
			mongodb_clustername: 'cluster0',
		}
	}
};
