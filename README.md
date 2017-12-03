<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project Name](#project-name)
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
  - [System Architecture](#system-architecture)
  - [Schema Design](#schema-design)
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
    - [Instance(s) Information](#instances-information)
    - [API Documentation](#api-documentation)
  - [Other Information](#other-information)
    - [Reset DATABASE](#reset-database)
    - [SeedData in test environment](#seeddata-in-test-environment)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Name

prototype-pe (prototype PharmEasy)

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

## System Architecture
![System Architecture](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/prototype-pe.png)

## Schema Design
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


### Instance(s) Information

### API Documentation

## Other Information

### Reset DATABASE

### SeedData in test environment
