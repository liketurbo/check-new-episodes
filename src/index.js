import ms from "ms"
import setImmediateInterval from "set-immediate-interval"

import updatedToday from "./utils/updatedToday"

setImmediateInterval(async () => {
  const updated = await updatedToday(
    "https://pirateproxy.us/search/rick%20and%20morty/0/3/0"
  )

  // eslint-disable-next-line no-console
  console.log(updated)
}, ms("1m"))
