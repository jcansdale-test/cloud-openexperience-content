#!/bin/bash
#
# This script stops the (running) application
#

echo "Trying to kill the process..."
PID=$(cat app.pid 2>/dev/null)
rm -f app.pid
if [ "$PID" ]; then
	if ps -p $PID > /dev/null 2>&1; then
		kill $PID
		STOP_CODE=$?
		echo "process ${PID} was killed"
	else
		echo "process ${PID} not running"
		STOP_CODE=4
	fi
else
	echo "app.pid not found"
	STOP_CODE=4
fi
exit ${STOP_CODE}