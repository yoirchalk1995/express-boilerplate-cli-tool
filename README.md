# express-boilerplate-cli-tool

A CLI tool to generate boilerplate code for express routers and mongoose models with joi validation.

## Features
- Automatically generates **Mongoose models** with **Joi validation**.
- Generates **Express routes**.
- Handles both **singular** and **plural** forms.
- Places generated files in appropriate **models** and **routes** directories.
- Creates **models** or **routes** folders in the root directory if they do not exist.

## Installation
Run the following command to install as a dev dependency:
```sh
npm install @yoirchalk/express-mongoose-cli-tool --save-dev
```

## Usage
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

### Usage Examples

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