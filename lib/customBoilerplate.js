import fs, { readFileSync } from "fs";
import path from "path";
import chalk from "chalk";

export function customFunction(type, file) {
  const sourcePath = path.resolve(file);
  const destinationPath = path.resolve(`lib/${type}Function.js`);

  try {
    const sourceData = readFileSync(sourcePath, "utf-8");
    const match = sourceData.match(/let template\s*=\s*`[\s\S]*?`/);
    if (!match) console.log(chalk.red("no template constant found in file"));
    const template = match[0];

    let destinationData = readFileSync(destinationPath, "utf-8");

    const updatedContent = destinationData.match(
      /let\s+template\s*=\s*`[\s\S]*?`;/
    )
      ? destinationData.replace(/let\s+template\s*=\s*`[\s\S]*?`;/, template)
      : `${destinationData} \n\n ${template}`;

    fs.writeFileSync(destinationPath, updatedContent, "utf-8");
    console.log(chalk.green("template boilerplate added"));
  } catch (error) {
    console.log(chalk.red("Error", error));
  }
}

export function revertTemplate(type) {
  const path = path.resolve(`lib/${type}Function.js`);

  try {
    const data = readFileSync(path, "utf-8");
    const template = data.match(/let template\s*=\s*`[\s\S]*?`/);
    if (!match) console.log(chalk.red(`no custom template found for ${type}s`));

    fs.writeFileSync(path, "let template = ``;");
  } catch (error) {}
}
