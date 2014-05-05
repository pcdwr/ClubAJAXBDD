test:
	node_modules/.bin/mocha tests/serverTests/ -R spec

test-features:
	node_modules/.bin/cucumber.js tests -f pretty

.PHONY: test, test-features
