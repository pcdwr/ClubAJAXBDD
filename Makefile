test:
	node_modules/.bin/mocha tests/serverTests/ -R spec

test-features:
	cucumber.js tests -f pretty

.PHONY: test, test-features

