.DEFAULT_GOAL=start
.PHONY: clean help setup start test dbuild dstart dstop

clean: ## Remove temporary artifacts
	@printf "\033[32;1mCleaning up the project...\033[0m\n"
	bin/clean

help: ## Show this help
	@awk 'BEGIN {FS = ":.*##"; \
	printf "\nUsage:\n\033[36m\033[0m"} /^[$$()% a-zA-Z_-]+:.*?##/ { \
	printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { \
	printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

setup: ## Install dependencies
	@printf "\033[32;1mInstalling dependencies...\033[0m\n"
	npm install

start: ## Start the API server
	@printf "\033[32;1mStarting the application...\033[0m\n"
	node ./src/index.js

test: setup ## Execute the test suite
	@printf "\033[32;1mExecuting tests...\033[0m\n"
	npm run test:unit && npm run test:api

dbuild: ## Build a docker image of the project
	@docker build -t highlights-api .

dstart: dbuild ## Start the API server in a container
	@docker run --rm -d --name highlights-api -p 3000:3000 highlights-api
	@printf "\033[32;1mHighlights API server is now running\033[0m\n"

dstop: ## Shut down the running container
	@docker stop -t 0 highlights-api
