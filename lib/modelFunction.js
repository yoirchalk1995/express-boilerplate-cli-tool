import fs from "fs";
import path from "path";
import chalk from "chalk";

/**
 * @param {string} name
 */

export default function modelFunction(name) {
  const modelName = name.toLowerCase();
  const pluralName = modelName.at(-1) === "s" ? modelName : modelName + "s";
  const capsName = modelName.at(0).toUpperCase() + modelName.slice(1);

  const folder = "models";
  const fileName = `${pluralName}.js`;

  const folderPath = path.resolve(folder);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, fileName);

  if (fs.existsSync(filePath)) {
    console.log(chalk.red("path already exists"));
    process.exit(0);
  }

  const content = `
  const Joi = require('joi');
  const mongoose = require('mongoose');

  const ${capsName} = mongoose.model(
  "${capsName}s",
  new mongoose.schema({
  //add schema path
  }))

  function validate${capsName}(${modelName}){
  const ${modelName}Schema = new Joi.object({
  //add validator fields here
  })

  return ${modelName}Schema.validate(${modelName})
  }

  exports.${capsName} = ${capsName}
  exports.validate${capsName} = validate${capsName}
  `;

  fs.writeFileSync(filePath, content, "utf-8");

  console.log(chalk.green(`created model with name ${pluralName}`));
}
