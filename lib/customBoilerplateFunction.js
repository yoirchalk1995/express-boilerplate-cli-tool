import fs, { readFileSync } from "fs";
import path from "path";
import chalk from "chalk";

export default function customFunction(type, file) {
  const sourcePath = path.resolve(file);
  const destinationPath = path.resolve(`${type}Function.js`);

  try {
    const sourceData = readFileSync(sourcePath, "utf-8");
    const match = sourceData.match(/const template\s*=\s*`[\s\S]*?`/);
    if (!match) console.log(chalk.red("no template constant found in file"));
    const template = match[0];

    let destinationData = readFileSync(destinationPath, "utf-8");
    const updatedContent = destinationData.includes(
      "const template =" || "const template="
    )
      ? destinationData.replace(/const template\s*=\s*`[\s\S]*?`;/, template)
      : `${template} \n \n ${destinationData}`;

    fs.writeFileSync(destinationPath, updatedContent, "utf-8");
    console.log(chalk.green("template boilerplate added"));
  } catch (error) {
    console.log(chalk.red("Error", error));
  }
}
