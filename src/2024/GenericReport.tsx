import { Result } from "./data/results"
import { PositionChange } from "../components/PostionChange"
import { Circuit } from "./data/circuits"

export default function GenericReport({ results, circuit }: { results: Result; circuit: Circuit }) {
  console.log("race results", results)
  console.log("circuit", circuit)
  return (
    <main className="max-h-full p-4 grid grid-cols-2 gap-2 ">
      <section>
        <h2 className="text-4xl">Summary: {circuit.name}</h2>
        <div className="">
          <table className="table">
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
                  <td>{result.avgSpeed?.toFixed(2)} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className=" grid grid-flow-row-dense">
        <div className="stats w-full">
          <article className="stat">
            <p className="stat-title">Laps</p>
            <p className="stat-value">{circuit.laps}</p>
          </article>
          <article className="stat">
            <p className="stat-title">Lap Distance</p>
            <p className="stat-value">{circuit.lapDistance} km</p>
          </article>
          <article className="stat">
            <p className="stat-title">Race Distance</p>
            <p className="stat-value">{circuit.raceDistance} km</p>
          </article>
        </div>
        <img className="w-5/6" src={circuit.pitStopGuide} alt="pit stops" />
        <img className="w-5/6" src={circuit.tyreGuide} alt="tyre guides" />
      </section>
    </main>
  )
}
