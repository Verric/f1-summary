import { results } from "./data/results"
import { PositionChange } from "../components/PostionChange"
import { Circuit } from "./data/circuits"

const driverData = results[0].drivers

export default function GenericReport({ raceResults, circuitInfo }: { raceResults?: unknown; circuitInfo?: Circuit }) {
  console.log("race results", raceResults)
  console.log("circuitInfo", circuitInfo)
  return (
    <main className="h-full p-4 grid grid-rows-2">
      <section className="grid grid-cols-2">
        <div>
          <h2 className="text-4xl">{circuitInfo?.name}</h2>
          <div className="overflow-x-auto overflow-y-auto">
            <table className="table table-md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Starting</th>
                  <th>Driver</th>
                  <th>Team</th>
                  <th>Time/Retired</th>
                  <th>Fastest Lap</th>
                  <th>Avg Speed km/h </th>
                </tr>
              </thead>
              <tbody>
                {driverData.map((datum, index) => (
                  <tr key={index} className="hover">
                    <td className="border-l-4 flex">
                      {datum.pos}
                      <PositionChange starting={datum.startingPos} final={datum.pos} />
                    </td>
                    <td>{datum.startingPos}</td>
                    <td>{datum.driverId}</td>
                    <td>{datum.teamId}</td>
                    <td>{datum.time}</td>
                    <td>{datum.fastestLap}</td>
                    <td>{datum.avgSpeed?.toFixed(2)} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="stats w-full">
            <article className="stat">
              <p className="stat-title">Laps</p>
              <p className="stat-value">{circuitInfo?.laps}</p>
            </article>
            <article className="stat">
              <p className="stat-title">Lap Distance</p>
              <p className="stat-value">{circuitInfo?.lapDistance}</p>
            </article>
            <article className="stat">
              <p className="stat-title">Race Distance</p>
              <p className="stat-value">{circuitInfo?.raceDistance}</p>
            </article>
          </div>
          <img className="w-5/6 h-auto" src={circuitInfo?.pitStopGuide} alt="pit stops" />
        </div>
      </section>
      <section className="grid grid-cols-2">
        <img src={circuitInfo?.tyreGuide} alt="tyre guide" />
        <img src={circuitInfo?.layout} alt="circuit layout" />
      </section>
    </main>
  )
}