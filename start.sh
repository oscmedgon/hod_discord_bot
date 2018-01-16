#!/bin/bash
echo "Starting process"
/home/oscraker/.nvm/versions/node/v8.9.3/bin/npm install;
echo "All dependencies are up to date"
/home/oscraker/.nvm/versions/node/v8.9.3/bin/node index.js > launch.log & exit;
echo "Program started"
done
