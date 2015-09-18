#!/usr/bin/env bash

cd ../

docker run \
	-d \
	--name "example_api" \
	-p 5000:5000 \
	-e "APP=index.js" \
	-e "NODE_ENV=development" \
	-v $(pwd)/api:/var/www/example.com/api \
	example/nodejs;
