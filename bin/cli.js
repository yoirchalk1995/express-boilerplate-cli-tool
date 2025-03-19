#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import modelFunction from "../lib/modelFunction.js";
import routerFunction from "../lib/routerFunction.js";

const typeOptions = ["model", "route"];

program
  .version("0.1.0")
  .description(
    "create file containing boilerplate code for an express route or mongoose model"
  )
  .argument("<type>", `type of file to create; ${typeOptions}`)
  .argument("<name>", "name of file to contain boilerplate code")
  .option("-a, --async", "specify if route handler is async", false)
  .action((type, name, options) => {
    const isAsync = options.async;
    console.log(isAsync);
    if (!typeOptions.includes(type)) {
      console.log(chalk.red("type not recognized."));
    }
    if (type === "model") {
      modelFunction(name);
    }
    if (type === "route") {
      routerFunction(name, isAsync);
    }
  });
program.parse(process.argv);
