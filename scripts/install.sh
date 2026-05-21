#!/bin/bash

cd /home/ec2-user/app

npm install

pkill node || true

nohup node server.js > app.log 2>&1 &