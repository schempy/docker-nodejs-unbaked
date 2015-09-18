## Using Node.js and Docker with host volumes

### Directory Structure
```bash
api/
	package.json
	server/
		index.js
		routes/
			widget.js
docker/
	Dockerfile
	start.sh
scripts/
	nodejs.sh
```

The **api/server** directory contains the Node.js server entry point file and the **api/server/routes directory contains routing for the application end-points.

The **docker** directory contains the Dockerfile used to create a Docker image. It also contains a script that the Docker image will run.

The **scripts** directory contains a bash shell script to run the Node.js Docker container.

For more details about the example checkout this [article](http://www.schempy.com/2015/09/17/docker_nodejs_using_host_volumes/).

