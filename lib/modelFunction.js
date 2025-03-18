import fs from "fs";
import path from "path";

/**
 * @param {string} name
 */

export default function modelFunction(modelName) {
  const pluralName = modelName.at(-1) === "s" ? modelName : modelName + "s";
  console.log(pluralName);
}
