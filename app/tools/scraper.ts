import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as cheerio from "cheerio"
import { groupBy, merge, orderBy, startCase } from "lodash-es"
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
] as const

//const DATA_URLS = ["/starting-grid", "/race-result", "/fastest-laps"]

function getPath(fileName = "results") {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, `${fileName}.json`)
  return filePath
}

function writeData(data: string) {
  const filePath = getPath()
  fs.writeFileSync(filePath, data)
}

const CONSTRUCTORS_MAP = {
  "McLaren Mercedes": "mclaren",
  "Red Bull Racing Honda RBPT": "red_bull",
  Mercedes: "mercedes",
  Ferrari: "ferrari",
  "Aston Martin Aramco Mercedes": "aston_martin",
  "Haas Ferrari": "haas",
  "Williams Mercedes": "williams",
  "RB Honda RBPT": "rb",
  "Alpine Renault": "alpine",
  "Kick Sauber Ferrari": "sauber",
} as const

function convertPos(position: string) {
  const result = Number.parseFloat(position)
  // position maybe a number or something like NC,DQ
  return isNaN(result) ? position : result
}

async function extractStartingPos(baseUrl: string) {
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

async function extractRaceResults(baseUrl: string) {
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
          const driverId = startCase($(el).find("td:nth-child(3)").text())
          const teamId = $(el).find("td:nth-child(4)").text() as keyof typeof CONSTRUCTORS_MAP
          const laps = Number($(el).find("td:nth-child(5)").text())
          const time = $(el).find("td:nth-child(6)").text()
          const points = Number($(el).find("td:nth-child(7)").text())
          return { [driverNo]: { pos, driverId, teamId, laps, time, points } }
        },
      },
    ],
  })
  const data = results.data
  const flattenedData = data.map(item => Object.values(item)[0])
  const temp = flattenedData.map(datum => ({ ...datum, teamId: CONSTRUCTORS_MAP[datum.teamId] }))
  const contructors = groupBy(temp, "teamId")
  const construcorsPoints: { teamId: string; points: number }[] = []
  for (const [key, value] of Object.entries(contructors)) {
    const points = value.reduce((acc, val) => {
      return acc + val.points
    }, 0)
    construcorsPoints.push({ teamId: key, points })
  }
  return { drivers: data, constructors: construcorsPoints }
}

async function fastestLaps(baseUrl: string) {
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
    raceUrls.map(async uri => {
      //raceUrls.slice(21, 22).map(async uri => { // test subsetsn
      const raceUrl = `${F1_BASE_URL}/${uri}`
      console.log("URL", raceUrl)
      const { drivers, constructors } = await extractRaceResults(raceUrl)
      const fast = await fastestLaps(raceUrl)
      const starting = await extractStartingPos(raceUrl)
      const merged = merge({}, ...drivers, ...fast, ...starting)
      const results = orderBy(
        Object.values(merged),
        //@ts-expect-error foo
        [item => (typeof item.pos === "number" ? item.pos : Infinity)],
        ["asc"]
      )
      const race = uri.split("/")[1]
      return { [race]: { drivers: results, constructors: constructors } }
    })
  )
  const flattened = res.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = obj[key]
    })
    return acc
  }, {})

  //console.log(JSON.stringify(res[0], null, 2))
  writeData(JSON.stringify(flattened, null, 2))
  console.log("DONE")
}

main()
