build: ## Install dependencies and build the application
	@printf "\033[32;1mInstalling dependencies...\033[0m\n"
	npm install

start: build ## Start the API server
	@printf "\033[32;1mStarting the application...\033[0m\n"
	node ./src/index.js

test: build  ## Execute the test suite
	@printf "\033[32;1mExecuting tests...\033[0m\n"
	npm run test:unit && npm run test:api

clean: ## Remove temporary artifacts
	@printf "\033[32;1mCleaning up the project...\033[0m\n"
	bin/clean
