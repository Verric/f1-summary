import { Result } from "./data/results"
import { PositionChange } from "../components/PostionChange"
import { Circuit } from "./data/circuits"
import CircuitStats from "../components/CircuitStats"

export default function RaceReport({ results, circuit }: { results: Result; circuit: Circuit }) {
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
                <th>Avg Speed km/h </th>
              </tr>
            </thead>
            <tbody>
              {results.drivers.map((result, index) => (
                <tr key={index} className="hover hover:dark:bg-red-600">
                  <td className="border-l-4 flex dark:text-white">
                    {result.pos}
                    <PositionChange starting={result.startingPos} final={result.pos} />
                  </td>
                  <td className="dark:text-white">{result.startingPos}</td>
                  <td className="dark:text-white">{result.driverId}</td>
                  <td className="dark:text-white">{result.teamId}</td>
                  <td className="dark:text-white">{result.time}</td>
                  <td className="dark:text-white">{result.fastestLap}</td>
                  <td className="dark:text-white">{result.avgSpeed?.toFixed(2)} </td>
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
