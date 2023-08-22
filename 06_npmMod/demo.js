const validator = require("validator");
const chalk = require("chalk");

console.log(chalk.blue('Hello world!'));

const res = validator.isEmail("demo@gmail,,com");
const res1 = validator.isEmail("demo@gmail.com");

console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));

console.log(res1?chalk.green.inverse(res1):chalk.red.inverse(res1));
