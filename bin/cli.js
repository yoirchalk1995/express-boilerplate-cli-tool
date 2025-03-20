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
    "Name of file to contain boilerplate code. Required unless -c flag is passed"
  )
  .option("-a, --async", "specify if route handler is async", false)
  .option("-c, --custom [file]", "specify file to act as custom template for ");
program
  .configureHelp({
    optionTerm: (option) => {
      const flagStr = String(option.flags);
      if (flagStr.includes("-c")) {
        return flagStr.replace(/\[([^\]]+)\]/, "<$1>");
      }
      return flagStr;
    },
    argumentTerm: (arg) => {
      return `<${arg.name()}>`;
    },
  })
  .usage("<type>, <name>")
  .action((type, name, options) => {
    const { async: isAsync, custom } = options;
    if (custom) {
      if (name) {
        console.log(chalk.red("name is not compatible with --custom flag"));
        process.exit();
      }
      if (custom === true) {
        console.log(chalk.red("custom boilerplate code file not provided."));
        process.exit();
      }
      customBoileplate(custom);
    }
    if (!typeOptions.includes(type)) {
      console.log(chalk.red(`<type> must be one of [${typeOptions}]`));
    }
    if (type === "model") {
      modelFunction(name);
      process.exit();
    }
    if (type === "route") {
      routerFunction(name);
      process.exit();
    }
    if (type === "both") {
      routerFunction(name);
      modelFunction(name);
      process.exit();
    }
  });
program.parse(process.argv);

function customBoileplate(type) {
  console.log(type);
}
