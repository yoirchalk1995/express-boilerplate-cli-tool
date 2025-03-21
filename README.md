# express-boilerplate-cli-tool

A CLI tool to generate boilerplate code for express routers and mongoose models with joi validation.

## Features
- Automatically generates **Mongoose models** with **Joi validation**.
- Generates **Express routes**.
- Handles both **singular** and **plural** forms.
- Places generated files in appropriate **models** and **routes** directories.
- Creates **models** or **routes** folders in the root directory if they do not exist.
- **New features in 1.1.0!**
  - Ability to set file as template for boilerplate using -c flag

## Installation
Run the following command to install as a dev dependency:
```sh
npm install @yoirchalk/express-mongoose-cli-tool --save-dev
```

## Usage

### Generating boilerplate code
This package provides a CLI tool for generating boilerplate code for your project. The command syntax is:
```sh
generate_bp <type> <name>
```
where:

  - `<type>` is the type of boilerplate you want to generate. It can be
    - `model` for generating a mongoose model with joi validation
    - `route` for generating an express route
    - `both` to generate both a route and a model

  - `name` is the name of the model or route you want to generate (e.g 'User', 'Products')

The program is case-insensitive and automatically handles both singular and plural forms.

The program places files in an approprite models/routes folder and will create the folder in root folder if it doesn't exist.

#### Usage Examples

- generate **model**
```sh
generate_bp model Appartment
```

- generate **route**
```sh
generate_bp route houses
```

- generate both a **route** and a **model**
```sh
generate_bp both Locations
```

- view help
```sh
generate_bp -h
generate_bp --help
```

### Setting file as boilerplate template
Command syntax is
```sh
generate_bp <type> -c <file>
```
where
- `<type>` is type of boilerplate to set either;
  - `<model>` or
  - `<route>`
- `<file>` is the .js file which contains a constant called template which is set to a template string which contains template boilerplate code

#### Usage example

```sh
generate_pb route -c template.js
```

and template.js:
```js
const template = `
const express = require('express')
const mysql = require('mysql2')

app.get('/${pluralName}', (req, res) => {
  const query = 'SELECT * FROM ${pluralName}';
  
  db.query(query, (err, ${pluralName}$) => {
    if (err) {
      console.error('Error fetching ${pluralName}:', err);
      res.status(500).json({ error: 'Failed to fetch ${pluralName}' });
      return;
    }
    res.send(${pluralName});
  });
});
`
```

include necessary import statements.