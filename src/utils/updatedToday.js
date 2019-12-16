import cheerio from "cheerio"
import delay from "delay"
import request from "request-promise-native"

import log from "./log"

export default async url => {
  let data = null

  while (true) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const html = await request(url)

      const $ = cheerio.load(html)

      data = $(".detDesc")[0].children[0].data

      break
    } catch (error) {
      log("Failed to connect.", "error")
      log("Trying again...", "warning")

      // eslint-disable-next-line no-await-in-loop
      await delay(1000)
    }
  }

  const re = /^Uploaded Today.*$/u

  return re.test(data)
}
