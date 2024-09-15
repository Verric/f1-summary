import data from "../assets/2024/monza/results.json"
import Monza from "../assets/2024/monza/Italy_Circuit.avif"
import MonzaTyreGuide from "../assets/2024/tyre_guides/monza_tyre_guide.avif"
import { PositionChange } from "../components/PostionChange"

export default function GenericReport() {
  return (
    <main className="max-h-screen p-4 grid grid-cols-2">
      <section>
        <h2 className="text-4xl">Race: Monza</h2>
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
              {data.map((datum, index) => (
                <tr key={index} className="hover">
                  <td className="border-l-4 flex" style={{ borderLeftColor: datum.colour }}>
                    {datum.pos}
                    <PositionChange starting={datum.starting} final={datum.pos} />
                  </td>
                  <td>{datum.starting}</td>
                  <td>{datum.driver}</td>
                  <td>{datum.car}</td>
                  <td>{datum.time}</td>
                  <td>{datum.fastestLap}</td>
                  <td>{datum.avgSpeed.toFixed(2)} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="h-full p-4 flex-grow flex flex-col">
        <h2 className="text-4xl">Circuit Info: Autodromo Nazionale Monza 🇮🇹</h2>

        <div className="stats">
          <article className="stat">
            <p className="stat-title">Laps</p>
            <p className="stat-value">53</p>
          </article>
          <article className="stat">
            <p className="stat-title">Lap Distance</p>
            <p className="stat-value">5.793 km</p>
          </article>
          <article className="stat">
            <p className="stat-title">Race Distance</p>
            <p className="stat-value">306.72 km</p>
          </article>
        </div>

        <img src={MonzaTyreGuide} alt="monza tyre guide" />
        <img src={Monza} alt="monza circuit" />
      </section>
    </main>
  )
}
