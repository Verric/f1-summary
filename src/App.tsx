import data from "./assets/2024/monza/results.json"
import Monza from "./assets/2024/monza/Italy_Circuit.avif"
import clsx from "clsx"
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

function PositionChange({ starting, final }: { starting: string | number; final: string | number }) {
  const change: number = (starting as number) - (final as number)
  if (change < 0) {
    return (
      <>
        <ArrowDownIcon className="size-6 text-red-500" />
        <span>({change})</span>
      </>
    )
  } else if (change === 0) {
    return <MinusIcon className="size-6" />
  } else if (change > 0) {
    return (
      <>
        <ArrowUpIcon className="size-6 text-green-500" />
        <span>(+{change})</span>
      </>
    )
  } else {
    return null
  }
}

function App() {
  const [horizontal, setHorizontal] = useState(true)
  return (
    <main className="p-4 flex" style={{ flexDirection: horizontal ? "row" : "column" }}>
      <section className="flex-grow">
        <h2 onClick={() => setHorizontal(!horizontal)} className="text-4xl">
          Race: Monza
        </h2>
        <div className="overflow-x-auto overflow-y-auto">
          <table className="table table-lg">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Time/Retired</th>
                <th>Fast Lap</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datum, index) => (
                <tr key={index} className={clsx("hover", `hover:bg-${datum.car.toLocaleLowerCase()}`)}>
                  <td className="border-l-4 flex" style={{ borderLeftColor: datum.colour }}>
                    {datum.pos}
                    <PositionChange starting={datum.starting} final={datum.pos} />
                  </td>
                  <td>{datum.driver}</td>
                  <td>{datum.car}</td>
                  <td>{datum.time}</td>
                  <td>{datum.fastestLap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-4xl">Circuit Info: Autodromo Nazionale Monza 🇮🇹</h2>
        <div className="stats w-full">
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
        <img src={Monza} alt="monza circuit" />
      </section>
    </main>
  )
}

export default App
