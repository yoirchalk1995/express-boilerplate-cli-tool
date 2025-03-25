#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import modelFunction from "../lib/modelFunction.js";
import routerFunction from "../lib/routeFunction.js";
import { customFunction } from "../lib/customBoilerplate.js";
import { revertTemplate } from "../lib/customBoilerplate.js";

const typeOptions = ["model", "route", "both"];

program
  .version("1.2.3")
  .description(
    "create file containing boilerplate code for an express route and or or mongoose model"
  )
  .argument("<type>", `type of file to create; ${typeOptions}`)
  .argument(
    "[name]",
    "Name of file to contain boilerplate code. Required unless -c flag is passed"
  )
  .option("-a, --async", "specify if route handler is async", false)
  .option("-c, --custom [file]", "specify file to act as custom template for ")
  .option("-r, --revert", "revert to default boilerplate template");
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
        console.log(
          chalk.red("custom boilerplate template file not provided.")
        );
        process.exit();
      }
      customFunction(type, custom);
      process.exit();
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

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
