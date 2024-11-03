"use client"
import { ResponsiveLine } from "@nivo/line"
import { results } from "../data/results"
import { teams } from "../data/teams"
import type { Result } from "../data/results"

type TargetShape = Array<{
  id: string | number
  data: Array<{
    x: number | string | Date
    y: number | string | Date
  }>
}>

const VENUE_ABBREVIATIONS: Record<string, string> = {
  bahrain: "BRN",
  saudiArabia: "KSA",
  australia: "AUS",
  japan: "JAP",
  chinaSprint: "CHN Sprint",
  china: "CHN",
  miamiSprint: "MIA Sprint",
  miami: "MIA",
  imola: "IMO",
  monaco: "MON",
  canada: "CAN",
  spain: "ESP",
  austriaSprint: "AUT Sprint",
  austria: "AUT",
  greatBritain: "GBR",
  hungary: "HUN",
  belgium: "BEL",
  netherlands: "NED",
  italy: "ITA",
  azerbaijan: "AZE",
  singapore: "SGP",
  unitedStatesSprint: "USA Sprint",
  unitedStates: "USA",
  mexico: "MEX",
  brazilSprint: "BRA Sprint",
}

function getAbbreviatedVenueName(venue: string): string {
  return VENUE_ABBREVIATIONS[venue] || venue
}

function transformData(results: Record<string, Result>): TargetShape {
  const teamDataMap: Record<string, { id: string; color?: string; data: Array<{ x: string; y: number }> }> = {}
  const cumulativePoints: Record<string, number> = {} // Track cumulative points for each team

  // Iterate through each race (key is the race location)
  for (const [location, result] of Object.entries(results)) {
    result.constructors.forEach(constructor => {
      const { teamId, points } = constructor
      const teamName = teams.find(team => team.teamId === teamId)!.team
      // Initialize data structure and cumulative points for each team if not present
      if (!teamDataMap[teamName]) {
        teamDataMap[teamName] = {
          id: teamName,
          color: teams.find(team => team.team === teamName)!.colour,
          data: [],
        }
        cumulativePoints[teamName] = 0
      }

      // Update cumulative points
      cumulativePoints[teamName] += points

      // Add race location (x) and cumulative points (y) to the team's data array
      teamDataMap[teamName].data.push({
        x: getAbbreviatedVenueName(location),
        y: cumulativePoints[teamName],
      })
    })
  }

  // Convert the map to an array to match TargetShape
  return Object.values(teamDataMap)
}
const data2 = transformData(results)
console.log("Data2", data2)
export default function MyResponsiveLine() {
  return (
    <ResponsiveLine
      data={data2}
      colors={series => series.color}
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        reverse: false,
      }}
      yFormat=""
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Race",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Points",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={4}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -50,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 120,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 10,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}
