/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ["@duncan3142/eslint-cnfg"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: [
			"./tsconfig.base.json",
			"./tsconfig.build.json",
			"./tsconfig.test.json",
			"./tsconfig.json",
		],
	},
	settings: {
		"import/resolver": {
			typescript: {
				project: [
					`${__dirname}/tsconfig.base.json`,
					`${__dirname}/tsconfig.build.json`,
					`${__dirname}/tsconfig.test.json`,
					`${__dirname}/tsconfig.json`,
				],
			},
			node: {
				project: [
					`${__dirname}/tsconfig.base.json`,
					`${__dirname}/tsconfig.build.json`,
					`${__dirname}/tsconfig.test.json`,
					`${__dirname}/tsconfig.json`,
				],
			},
		},
	},
}
