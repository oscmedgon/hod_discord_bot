#!/bin/bash
## Saving commits latest commits local and head
git -C /home/oscraker/hod_discord_bot/ log > local.update.log
git -C /home/oscraker/hod_discord_bot/ log HEAD master > remote.update.log

## Saving commits to be cheched
lastUpdateLocal=`head -1 local.update.log | cut -d " " -f2-`
lastUpdateRemote=`head -1 remote.update.log | cut -d " " -f2-`

## print las local version
echo "Your latest local commit is" $lastUpdateLocal
echo "Your latest remote commit is" $lastUpdateRemote

if [ "$lastUpdateLocal" == "$lastUpdateRemote" ]
then
	echo "Your app it's up to date"
else
	echo "Your app must be updated"
fi
