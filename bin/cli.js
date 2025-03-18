#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";

const typeOptions = ["model", "route"];

program
  .version("1.0.0")
  .description(
    "create file containing boilerplate code for an express route or mongoose model"
  )
  .argument("<type>", `type of file to create; ${typeOptions}`)
  .argument("<name>", "name of file to contain boilerplate code")
  .option("-a, --async", "specify if route handler is async", false)
  .action((type, name, options) => {
    if (!typeOptions.includes(type)) {
      console.log(chalk.red("type not recognized."));
    }

    if (type === "model") {
      console.log(`creating model with name ${name}`);
    }
    if (type === "route") {
      console.log(
        `creating route with name ${name}. isAsync: ${options.async}`
      );
    }
  });
program.parse(process.argv);
