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
    - [Python Setup](#python-setup)
      - [install python](#install-python)
    - [Airbnb Style Guide Setup](#airbnb-style-guide-setup)
      - [global](#global)
      - [local](#local)
      - [configure .eslintrc (global/local)](#configure-eslintrc-globallocal)
  - [Development](#development)
    - [npm Scripts](#npm-scripts)
      - [install](#install)
      - [start](#start)
      - [dev-start (with nodemon)](#dev-start-with-nodemon)
      - [lint test (with eslint)](#lint-test-with-eslint)
      - [unit test (with mocha)](#unit-test-with-mocha)
      - [test](#test)
      - [coverage (istanbul with mocha)](#coverage-istanbul-with-mocha)
  - [Other Information](#other-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Name

prototyp-pe (prototype PharmEasy)

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

## Development

### npm Scripts

#### install
```
$ npm install
```

#### start
```
$ npm start
```

#### dev-start (with nodemon)
```
$ npm dev-start
```

#### dev-react (with webpack -d --watch)
```
$ npm dev-react
```

#### lint test (with eslint)
```
$ npm lint
```

#### unit test (with mocha)
```
$ npm unit
```

#### coverage (istanbul with mocha)
```
$ npm coverage
```

#### test
```
$ npm test
```

## Other Information
