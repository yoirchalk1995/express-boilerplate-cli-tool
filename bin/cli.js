#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";

program
  .version("1.0.0")
  .description("test cli input")
  .command("test <name>")
  .description("display the input")
  .action((name) => {
    // Log the input with chalk to add some color to the text
    console.log(chalk.bgCyan(`You entered: ${name}`));

    process.exit(0);
  });

program.parse(process.argv);
