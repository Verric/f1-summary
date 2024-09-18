import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as cheerio from "cheerio"
import { merge, orderBy, snakeCase } from "lodash-es"

// Just hacking stuff together.

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
  console.log(url)

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
  const url = `${baseUrl}/race-result`
  console.log(url)
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
  console.log(url)
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
  const baseUrl = "https://www.formula1.com/en/results/2024/races/1245/azerbaijan"
  const races = await extractRaceResults(baseUrl)
  const fast = await fastestLaps(baseUrl)
  const starting = await extractStartingPos(baseUrl)
  const merged = merge({}, ...races, ...fast, ...starting)
  const results = orderBy(
    Object.values(merged),
    [item => (typeof item.pos === "number" ? item.pos : Infinity)],
    ["asc"]
  )
  writeData(JSON.stringify(results, null, 2))
}

main()
