#!/bin/bash
## Saving commits latest commits local and head
git -C /home/oscraker/hod_discord_bot/ log > local.update.log
git ls-remote > remote.update.log

## Saving commits to be cheched
lastUpdateLocal=`head -1 local.update.log | cut -d " " -f2-`
hashLength=${#lastUpdateLocal}
lastUpdateRemote=`head -1 remote.update.log | cut -c 1-$hashLength`
## print las local version
echo "Your latest local commit is" $lastUpdateLocal
echo "Your latest remote commit is" $lastUpdateRemote

if [ "$lastUpdateLocal" == "$lastUpdateRemote" ]
then
	pid=`pgrep -d " " -f ^/home/oscraker/.nvm/versions/node/v8.9.3/bin/node`;
	if [ -n "$pid" ]
		then
			echo "Your app it's up to date and running"
			echo "Your app it's up to date and running" >> update.log
		else
			node index.js >> launch.log &
			echo "Your app was closed, App it's up to date and running"
			echo "Your app was closed, App it's up to date and running" >> update.log & exit
		fi
else
	echo "Your app must be updated" >> update.log &
	pid=`pgrep -d " " -f ^/home/oscraker/.nvm/versions/node/v8.9.3/bin/node`;
	echo "Old PID $pid"
	kill $pid;
	git pull;
	yarn;
	node index.js >> launch.log;
	newPid=`pgrep -d " " -f ^/home/oscraker/.nvm/versions/node/v8.9.3/bin/node`;
	echo "NEW PID $newPid";
	if [ -n "$newPid" ]
	then
		echo "App it's running on PID " $newPid >> update.log &
	else
		wall "Discord bot updater finished with error";
		echo "Something went whrong app isn't running" >> update.log;
	fi
fi
DATE=`date '+%Y-%m-%d %H:%M:%S'`
echo "Executed at: " $DATE  >> update.log
echo "-----------------------------------" >> update.log
