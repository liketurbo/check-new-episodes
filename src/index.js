import dotenv from "dotenv-safe"
import ms from "ms"
import setImmediateInterval from "set-immediate-interval"

import sendEmail from "./utils/sendEmail"
import updatedToday from "./utils/updatedToday"

dotenv.config()

// eslint-disable-next-line no-console
console.log("Looking for a new episodes...")

setImmediateInterval(async () => {
  const updated = await updatedToday(
    "https://pirateproxy.us/search/rick%20and%20morty/0/3/0"
  )

  if (updated) {
    await sendEmail("Rick and Morty")

    // eslint-disable-next-line no-console
    console.log("Got one 🎉")

    // eslint-disable-next-line no-process-exit
    process.exit(0)
  }
}, ms("1m"))
