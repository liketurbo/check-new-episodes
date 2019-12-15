import cheerio from "cheerio"
import request from "request-promise-native"

export default async url => {
  const html = await request(url)

  const $ = cheerio.load(html)
  const { data } = $(".detDesc")[0].children[0]

  const re = /^Uploaded (\d\d)-(\d\d).*$/u
  const [, month, day] = re.exec(data)

  const monthToday = new Date().getMonth()
  const dayToday = new Date().getDate()

  return month === monthToday && day === dayToday
}
