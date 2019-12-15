import chalk from "chalk"

export default (msg, variant) => {
  /* eslint-disable no-console */
  switch (variant) {
    case "warning":
      console.log(chalk.black.bgYellow(msg))

      break
    case "success":
      console.log(chalk.black.bgGreen(msg))

      break
    case "error":
      console.log(chalk.black.bgRed(msg))

      break
    default:
      console.log(chalk.black.bgWhite(msg))
  }
  /* eslint-enable no-console */
}
