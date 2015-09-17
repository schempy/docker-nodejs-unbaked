#!/bin/bash

if [ -z "$NODE_ENV" ]; then
    export NODE_ENV=development
fi

cd /var/www/example.com/api
npm install
cd /var/www/example.com/api/server
pm2 start -x $APP --name="app" --no-daemon
