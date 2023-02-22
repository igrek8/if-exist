#!/usr/bin/env node

import { program } from "commander";

import { existsSync } from "fs";
import { join } from "path";

const { name, version, description } = require("../package.json");

interface IfExistsCommandOptions {
  not?: boolean;
}

program
  .name(name)
  .version(version)
  .description(description)
  .option("-n --not", "negates result", false)
  .argument("<paths...>", "file or directory paths")
  .action((paths: string[], { not }: IfExistsCommandOptions) => {
    const cwd = process.cwd();
    const exists = paths.every((path) => existsSync(join(cwd, path)));
    const result = not ? !exists : exists;
    const code = result ? 0 : 1;
    process.exit(code);
  })
  .parse();
