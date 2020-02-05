const chalk = require("chalk");

export function consoleMessage(color: string, msg: string) {

  let chalkColor = "#ffffff";

  if (color === 'red') {
    chalkColor = "#E50000";
  } else if (color === 'green') {
    chalkColor = "#00E500";
  } else if (color === 'blue') {
    chalkColor = "#000010";
  } else if (color === 'yellow') {
    chalkColor = "#E5E510";
  } else if (color === 'orange') {
    chalkColor = "#E5E510";
  } else {
    chalkColor = "#ffffff";
  }

  if (msg) {
    console.log(chalk.hex(chalkColor)(msg));
  }

}
