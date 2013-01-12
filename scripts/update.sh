#!/bin/sh

# Update the source
GIT_WORK_TREE=/home/ec2-user/webapps/mobile-test 
git checkout -f $RELEASE_ENV

# Install any new dependencies
cd /home/ec2-user/webapps/mobile-test
npm install

# Restart the service 
forever restart server.js