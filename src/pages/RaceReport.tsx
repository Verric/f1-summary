import { useContext } from "react"
import { UnitContext } from "../pages/AppLayout"
import { PositionChange } from "../components/PostionChange"
import CircuitStats from "../components/CircuitStats"
import { Circuit } from "../data/circuits"
import { Result } from "../data/results"
import { kmToMi } from "../utils/conversionUtils"

export default function RaceReport({ results, circuit }: { results: Result; circuit: Circuit }) {
  const isImperial = useContext(UnitContext)
  return (
    <main className="max-h-full grid grid-cols-2 gap-2">
      <section>
        <h2 className="text-4xl">Summary: {circuit.name}</h2>
        <CircuitStats circuit={circuit} />
        <div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Starting</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Time/Retired</th>
                <th>Fastest Lap</th>
                <th>Avg Speed {isImperial ? "mi/h" : "km/h"} </th>
              </tr>
            </thead>
            <tbody>
              {results.drivers.map((result, index) => (
                <tr key={index} className="hover">
                  <td className="border-l-4 flex">
                    {result.pos}
                    <PositionChange starting={result.startingPos} final={result.pos} />
                  </td>
                  <td>{result.startingPos}</td>
                  <td>{result.driverId}</td>
                  <td>{result.teamId}</td>
                  <td>{result.time}</td>
                  <td>{result.fastestLap}</td>
                  <td>{isImperial ? `${kmToMi(result.avgSpeed).toFixed(2)}` : `${result.avgSpeed.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className=" grid grid-flow-row-dense">
        <img className="w-4/5" src={circuit.pitStopGuide} alt="pit stops" />
        <img className="w-4/5" src={circuit.tyreGuide} alt="tyre guides" />
      </section>
    </main>
  )
}
