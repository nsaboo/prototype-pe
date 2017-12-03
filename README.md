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
    - [Docker Setup](#docker-setup)
    - [System Architecture](#system-architecture)
    - [Instance(s) Information](#instances-information)
  - [Other Information](#other-information)

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

### Docker Setup

### System Architecture
![System Architecture](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/prototype-pe.png)

### Schema Design
![Schema Design](https://raw.github.com/nsaboo/prototype-pe/master/docs/images/SchemaDesign.png)

### Instance(s) Information

### API Documentation

## Other Information

### Reset DATABASE

### SeedData in test environment
