#!/bin/bash
#
# This script configures the start information for this server.
#
# The following variables may be used to override the defaults.
#

# port used for accessing the app
if [ -z "$APP_PORT" ]; then
	APP_PORT=8080
fi

# default JVM options
if [ -z "$APP_JVM_OPTS" ]; then
	APP_JVM_OPTS='-server -Xmx1024m -XX:MaxPermSize=256M -Djava.awt.headless=true -Dorg.osgi.service.http.port=${APP_PORT}'
fi

# debugging support
if [ -n "${APP_DEBUG_PORT}" ]; then
	APP_JVM_OPTS="${APP_JVM_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,address=${APP_DEBUG_PORT},suspend=n"
fi

# ------------------------------------------------------------------------------
# do not configure below this point
# ------------------------------------------------------------------------------

if [ $APP_PORT ]; then
	START_OPTS="${START_OPTS}"
fi
START_OPTS="${START_OPTS}"

JARFILE=`ls cloud.openexperience.content*.jar | head -1`
mkdir -p launcher/logs
(
  (
    java $APP_JVM_OPTS -jar $JARFILE $START_OPTS &
    echo $! > app.pid
  ) >> launcher/logs/stdout.log 2>&1
) &
echo "Open Experience Content started on port ${APP_PORT}!"