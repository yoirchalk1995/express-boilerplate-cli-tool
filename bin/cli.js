#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import modelFunction from "../lib/modelFunction.js";
import routerFunction from "../lib/routerFunction.js";

const typeOptions = ["model", "route", "both"];

program
  .version("0.1.0-beta.1")
  .description(
    "create file containing boilerplate code for an express route and or or mongoose model"
  )
  .argument("<type>", `type of file to create; ${typeOptions}`)
  .argument(
    "[name]",
    "Name of file to contain boilerplate code. Required unless-c flag is passed"
  )
  .option("-a, --async", "specify if route handler is async", false)
  .option("-c, --custom <file>", "specify file to act as custom template for ")
  .action((type, name, options) => {
    const { async: isAsync, custom } = options;
    if (custom) {
      console.log(custom);
      return;
    }

    if (!typeOptions.includes(type)) {
      console.log(chalk.red("type not recognized."));
    }
    if (type === "model") {
      modelFunction(name);
    }
    if (type === "route") {
      routerFunction(name, isAsync);
    }
    if (type === "both") {
      routerFunction(name, isAsync);
      modelFunction(name);
    }
  });
program.parse(process.argv);
