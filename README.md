# Open Experience Content

Open source Cloud Native Content Management System

## Build

To build an instance with of the Open Experience Content, you'll need Apache Maven 3.0+ and Git.

First clone the code:

    git clone https://github.com/OpenExperienceCloud/cloud-openexperience-content.git
    
Next build the code with:

    mvn clean install
    
The JAR will be located under: `feature/target/cloud.openexperience-content-[VERSION].jar`

## Running

To run the Sling CMS, build the code and copy the files `feature/src/main/scripts/start.sh` `feature/src/main/scripts/stop.sh` and `feature/target/cloud.openexperience-content-[VERSION].jar` to a directory. Execute the script `./start.sh` to start Open Experience Content.

## Login

Navigate to [http://localhost:8080/](http://localhost:8080/). The default credentials are *admin*/*admin*.
