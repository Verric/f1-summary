import { useState } from "react"
import data from "../assets/2024/monza/results.json"
import Monza from "../assets/2024/monza/Italy_Circuit.avif"
import MonzaTyreGuide from "../assets/2024/tyre_guides/monza_tyre_guide.avif"
import clsx from "clsx"
import { PositionChange } from "../components/PostionChange"
import { kmToMi } from "../utils/conversion_utils"

function MonzaReport() {
  const [useKms, setUseKms] = useState(true)
  return (
    <main className="max-h-screen p-4 grid grid-cols-2">
      <section>
        <h2 className="text-4xl">Race: Monza</h2>
        <div className="form-control">
          <label className="label justify-normal cursor-pointer">
            <span className="label-text">{useKms ? "metric" : "imperial"}</span>
            <input
              type="checkbox"
              className="toggle ml-4"
              defaultChecked={useKms}
              onChange={() => setUseKms(!useKms)}
            />
          </label>
        </div>
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
                <th>Avg Speed {useKms ? "km/h" : "mi/h"}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datum, index) => (
                <tr key={index} className={clsx("hover", `hover:bg-${datum.car.toLocaleLowerCase()}`)}>
                  <td className="border-l-4 flex" style={{ borderLeftColor: datum.colour }}>
                    {datum.pos}
                    <PositionChange starting={datum.starting} final={datum.pos} />
                  </td>
                  <td>{datum.starting}</td>
                  <td>{datum.driver}</td>
                  <td>{datum.car}</td>
                  <td>{datum.time}</td>
                  <td>{datum.fastestLap}</td>
                  <td>{useKms ? datum.avgSpeed.toFixed(2) : kmToMi(datum.avgSpeed).toFixed(2)}</td>
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
            <p className="stat-value">{useKms ? "5.793 km" : `${kmToMi(5.793).toFixed(3)} mi`}</p>
          </article>
          <article className="stat">
            <p className="stat-title">Race Distance</p>
            <p className="stat-value">{useKms ? "306.72 km" : `${kmToMi(306.72).toFixed(3)} mi`}</p>
          </article>
        </div>

        <img src={MonzaTyreGuide} alt="monza tyre guide" />
        <img src={Monza} alt="monza circuit" />
      </section>
    </main>
  )
}

export default MonzaReport
