import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as cheerio from "cheerio"
import { merge, orderBy, snakeCase } from "lodash-es"
// Just hacking stuff together.
const F1_BASE_URL = "https://www.formula1.com/en/results/2024/races"
const raceUrls = [
  "1229/bahrain",
  "1230/saudi-arabia",
  "1231/australia",
  "1232/japan",
  "1233/china",
  "1234/miami",
  "1235/emilia-romagna",
  "1236/monaco",
  "1237/canada",
  "1238/spain",
  "1239/austria",
  "1240/great-britain",
  "1241/hungary",
  "1242/belgium",
  "1243/netherlands",
  "1244/italy",
  "1245/azerbaijan",
  "1246/singapore",
  "1247/united-states",
  "1248/mexico",
  "1249/brazil",
  "1250/las-vegas",
  "1251/qatar",
  "1252/abu-dhabi",
]

const DATA_URLS = ["/starting-grid", "/race-result", "/fastest-laps"]

function getPath(fileName = "results") {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, `${fileName}.json`)
  return filePath
}

function writeData(data) {
  const filePath = getPath()
  fs.writeFileSync(filePath, data)
}

function convertPos(position) {
  const result = Number.parseFloat(position)
  // position maybe a number or something like NC,DQ
  return isNaN(result) ? position : result
}

async function extractStartingPos(baseUrl) {
  const url = `${baseUrl}/starting-grid`

  const $ = await cheerio.fromURL(url)
  $(".tablet\\:hidden").remove()

  const results = $.extract({
    data: [
      {
        selector: "tbody tr",
        value: el => {
          const startingPos = Number($(el).find("td:nth-child(1)").text())
          const driverNo = $(el).find("td:nth-child(2)").text()
          return { [driverNo]: { startingPos } }
        },
      },
    ],
  })
  return results.data
}

async function extractRaceResults(baseUrl) {
  console.log("BASE URL", baseUrl)
  const url = `${baseUrl}/race-result`
  const $ = await cheerio.fromURL(url)
  $(".tablet\\:hidden").remove()
  const results = $.extract({
    data: [
      {
        selector: "tbody tr",
        value: el => {
          const pos = convertPos($(el).find("td:nth-child(1)").text())
          const driverNo = $(el).find("td:nth-child(2)").text()
          const driverId = snakeCase($(el).find("td:nth-child(3)").text())
          const teamId = $(el).find("td:nth-child(4)").text()
          const laps = Number($(el).find("td:nth-child(5)").text())
          const time = $(el).find("td:nth-child(6)").text()
          const points = Number($(el).find("td:nth-child(7)").text())
          return { [driverNo]: { pos, driverId, teamId, laps, time, points } }
        },
      },
    ],
  })
  return results.data
}

async function fastestLaps(baseUrl) {
  const url = `${baseUrl}/fastest-laps`
  const $ = await cheerio.fromURL(url)
  $(".tablet\\:hidden").remove()
  const results = $.extract({
    data: [
      {
        selector: "tbody tr",
        value: el => {
          const driverNo = $(el).find("td:nth-child(2)").text()
          const fastestLap = $(el).find("td:nth-child(7)").text()
          const avgSpeed = Number($(el).find("td:nth-child(8)").text())
          return { [driverNo]: { fastestLap, avgSpeed } }
        },
      },
    ],
  })
  return results.data
}

async function main() {
  const res = await Promise.all(
    raceUrls.slice(0, 3).map(async uri => {
      const url = `${F1_BASE_URL}/${uri}`
      console.log("URL", url)
      const races = await extractRaceResults(url)
      const fast = await fastestLaps(url)
      const starting = await extractStartingPos(url)
      const merged = merge({}, ...races, ...fast, ...starting)
      const results = orderBy(
        Object.values(merged),
        [item => (typeof item.pos === "number" ? item.pos : Infinity)],
        ["asc"]
      )
      return results
    })
  )

  console.log(JSON.stringify(res.flat(), null, 2))
  //writeData(JSON.stringify(results, null, 2))
}

main()
