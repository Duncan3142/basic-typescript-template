/** @type {import('eslint').Linter.Config} */

const project = [
  `${__dirname}/tsconfig.base.json`,
  `${__dirname}/tsconfig.cnfg.json`,
  `${__dirname}/tsconfig.build.json`,
  `${__dirname}/tsconfig.test.json`,
  `${__dirname}/tsconfig.json`,
]

module.exports = {
	root: true,
	extends: ["@duncan3142/eslint-cnfg"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project
	},
	settings: {
		"import/resolver": {
			typescript: {
				project
			},
			node: {
				project
			},
		},
	},
}
