<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project Name](#project-name)
  - [PharmEasy EcoSystem](#pharmeasy-ecosystem)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [Usage](#usage)
  - [Requirements](#requirements)
  - [Setup (Mac)](#setup-mac)
    - [Node Setup](#node-setup)
    - [MySQL Setup](#mysql-setup)
      - [install mysql](#install-mysql)
      - [start mysql](#start-mysql)
      - [create database](#create-database)
    - [Airbnb Style Guide Setup](#airbnb-style-guide-setup)
      - [global](#global)
      - [local](#local)
      - [configure .eslintrc (global/local)](#configure-eslintrc-globallocal)
    - [Tmux Configuration](#tmux-configuration)
  - [PharmEasy System Architecture](#pharmeasy-system-architecture)
  - [PharmEasy Schema Design](#pharmeasy-schema-design)
  - [Development](#development)
    - [npm Scripts](#npm-scripts)
      - [install](#install)
      - [start (node)](#start-node)
      - [dev-start (nodemon)](#dev-start-nodemon)
      - [dev-react (webpack -d --watch)](#dev-react-webpack--d---watch)
      - [lint test (eslint)](#lint-test-eslint)
      - [unit test (mocha)](#unit-test-mocha)
      - [coverage (istanbul + mocha)](#coverage-istanbul--mocha)
      - [test (lint + unit + coverage)](#test-lint--unit--coverage)
      - [postinstall (webpack -p)](#postinstall-webpack--p)
    - [Travis-CI Integration](#travis-ci-integration)
      - [Links](#links)
    - [AWS Setup](#aws-setup)
    - [Docker Setup (AWS EC2)](#docker-setup-aws-ec2)
      - [setup commands](#setup-commands)
      - [hub images](#hub-images)
    - [Instance(s) Information](#instances-information)
    - [API Documentation (get, put, post)](#api-documentation-get-put-post)
    - [Reset/SeedData DATABASE (Test environments)](#resetseeddata-database-test-environments)
  - [Other Information](#other-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Name

prototype-pe (prototype PharmEasy)

## PharmEasy EcoSystem
![PharmEasy EcoSystem](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/PharmEasy.png)

## Roadmap

## Contributing

## Usage

## Requirements

- [Node 8.3.0](https://www.npmjs.com/package/node)
- [MySQL 5.7.20](https://www.mysql.com/)
- [MySQL Workbench 6.3](https://www.mysql.com/products/workbench/)
- [express](https://www.npmjs.com/package/express)
- [react](https://www.npmjs.com/package/react)
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
- [react-bootstrap-table](https://www.npmjs.com/package/react-bootstrap-table)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)

## Setup (Mac)

### Node Setup
```
$ brew install node
$ node --version
```

### MySQL Setup
#### install mysql
```
$ brew install mysql
$ mysql --version
```

#### start mysql
```
$ brew services start mysql
```

#### create database
```
$ mysql -u <user> -p <password>
mysql> CREATE DATABASE pharmeasy;
mysql> CREATE DATABASE test_pharmeasy;
```

### Airbnb Style Guide Setup

#### global
```
$ npm install -g eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### local
```
$ npm install --save-dev eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### configure .eslintrc (global/local)
```
$ cat .eslintrc.js
// These rules enforce the Airbnb style guide.

module.exports = {
  extends: 'airbnb',
  env: { browser: true },
};
```

### Tmux Configuration

```
brew install Tmux

# From the root of the prototype-pe project directory, run the following
bash tools/tmux.sh
```

## PharmEasy System Architecture
![System Architecture](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/Prototype-PE.png)

## PharmEasy Schema Design
![Schema Design](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/SchemaDesign.png)

## Development

### npm Scripts

#### install
```
$ npm install
```

#### start (node)
```
$ npm start
```

#### dev-start (nodemon)
```
$ npm dev-start
```

#### dev-react (webpack -d --watch)
```
$ npm dev-react
```

#### lint test (eslint)
```
$ npm lint
```

#### unit test (mocha)
```
$ npm unit
```

#### coverage (istanbul + mocha)
```
$ npm coverage
```

#### test (lint + unit + coverage)
```
$ npm test
```

#### postinstall (webpack -p)
```
$ npm postinstall
```

### Travis-CI Integration

#### Links

- [prototype-pe](https://travis-ci.org/nsaboo/prototype-pe)
- [builds](https://travis-ci.org/nsaboo/prototype-pe/builds)
- [branches](https://travis-ci.org/nsaboo/prototype-pe/branches)

### AWS Setup

- login to aws console
- launch EC2 instances (as per suggested region, selected Mumbai)
- create key for the new region if doesn't exist (lets say as USERKEY.pem)
- download and chmod 400 USERKEY.pem
- cp USERKEY.pem to ~/.ssh/
- ssh-add ~/.ssh/USERKEY.pem
- launch as many T2 micro instances as per your Architecture
- install Docker (read the below Docker section)
- create Security Groups as needed per your Architecture and apply to each of the T2 EC2 instances
- create Docker Swarm/Stack and deploy your application through Docker Hub

### Docker Setup (AWS EC2)

#### setup commands
```
# yum upgrade
sudo yum upgrade

# docker git telnet
sudo yum install -y git docker telnet

# docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# docker service
sudo service docker start
sudo usermod -a -G docker ec2-user
# logout and login again to have the docker commands run as sudo (with ec2-user)

# bash-completion
sudo yum install -y bash-completion --enablerepo=epel
sudo curl -L https://raw.githubusercontent.com/docker/cli/master/contrib/completion/bash/docker -o /etc/bash_completion.d/docker
sudo curl -L https://raw.githubusercontent.com/docker/compose/master/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose

source /etc/bash_completion

# nvm installation
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash && source ~/.bashrc && nvm install 8.3.0
```

#### hub images

- [Docker Hub images](https://hub.docker.com/r/nsaboo/)

### Instance(s) Information

```
#
export DOCKER-STACK-INSTANCE=ec2-***************.ap-south-1.compute.amazonaws.com

# APP Server
http://DOCKER-STACK-INSTANCE:3000/

# MySQL Server
DOCKER-STACK-INSTANCE on 3306

# Kibana Server
http://DOCKER-STACK-INSTANCE:5601/

# Logstash Server
DOCKER-STACK-INSTANCE

# ElasticSearch Server
DOCKER-STACK-INSTANCE on 9200
```

### API Documentation (get, put, post)
```
# API end points
http://localhost:3000/api/user
http://localhost:3000/api/illness
http://localhost:3000/api/city
http://localhost:3000/api/patient
http://localhost:3000/api/hospital
http://localhost:3000/api/doctor
http://localhost:3000/api/laboratory
http://localhost:3000/api/prescription
http://localhost:3000/api/pharmacy
http://localhost:3000/api/insurer
http://localhost:3000/api/company

# Example POST - GET - PUT - GET

## POST
$ curl -H "Content-Type: application/json" -d '{"name": "doctor_1234"}' -X POST http://localhost:3000/api/doctor | jsonlint
{
  "id": 23,
  "name": "doctor_1234",
  "updatedAt": "2017-12-03T19:31:03.583Z",
  "createdAt": "2017-12-03T19:31:03.583Z"
}

## GET
$ curl http://localhost:3000/api/doctor?id=23 | jsonlint
[
  {
    "id": 23,
    "name": "doctor_1234",
    "age": null,
    "gender": null,
    "email": null,
    "mobile": null,
    "createdAt": "2017-12-03T19:31:03.000Z",
    "updatedAt": "2017-12-03T19:31:03.000Z",
    "cityId": null
  }
]

## PUT
$ curl -H "Content-Type: application/json" -d '{"age": "99"}' -X PUT http://localhost:3000/api/doctor?id=23
[1]

## GET
$ curl "http://localhost:3000/api/doctor?id=23&age=99" | jsonlint
[
  {
    "id": 23,
    "name": "doctor_1234",
    "age": 99,
    "gender": null,
    "email": null,
    "mobile": null,
    "createdAt": "2017-12-03T19:31:03.000Z",
    "updatedAt": "2017-12-03T19:33:14.000Z",
    "cityId": null
  }
]
```

### Reset/SeedData DATABASE (Test environments)
```
export DB_USERNAME=DB_USERNAME
export DB_USERNAME=DB_USERNAME
export DB_DATABASE=DB_DATABASE
export DB_HOST=ec2-***************.ap-south-1.compute.amazonaws.com
export DB_DIALECT=mysql
export NODE_ENV=prod

### NOTE ONLY DO THIS IN YOUR DEV/TEST ENVIRONMENTS ONLYYYYYYYYYY OR TO DO DEMO OF YOUR PROTOTYPE
node server/database/reset.js
node server/test/seedData/setup.js

# Verify in MySQL
mysql -upharmeasy -ppharmeasy -hec2-***************.ap-south-1.compute.amazonaws.com -P3306

# Verify through api end points as given above
```

## Other Information
