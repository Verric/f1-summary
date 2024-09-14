import { Link } from "react-router-dom"
import MonzaOutline from "../../assets/2024/monza/monza_outline.png"
import BahrainOutline from "../../assets/2024/bahrain-outline.png"
import SaudiArabiaOutline from "../../assets/2024/saudi-arabia-outline.png"
import AustraliaOutline from "../../assets/2024/australia-outline.png"
import DriverLeaderboard from "./DriverLeaderboard"
import ConstructorLeaderboard from "./ConstructorLeaderboard"

import { getDriverStandings, getConstructorsStandings } from "../data/results"

export default function Dashboard() {
  console.log(getDriverStandings(2))
  console.log(getConstructorsStandings(2))
  return (
    <main className="flex flex-col p-4">
      <section className="flex-auto">
        <section className="flex">
          <article className="p-4 flex flex-col items-center">
            <img src={BahrainOutline} alt="bahrain" className="w-32 h-auto" />
            <Link className="btn btn-primary" to="bahrain">
              Bahrain
            </Link>
          </article>
          <article className="p-4 flex flex-col items-center">
            <img src={SaudiArabiaOutline} alt="saudi arabia circuit" className="w-32 h-auto" />
            <Link className="btn btn-primary" to="saudi-arabia">
              Saudi Arabia
            </Link>
          </article>
          <article className="p-4 flex flex-col items-center">
            <img src={AustraliaOutline} alt="australia circuit" className="w-32 h-auto" />
            <Link className="btn btn-primary" to="australia">
              Australia
            </Link>
          </article>
          <article className="p-4 flex flex-col items-center">
            <img src={MonzaOutline} alt="monza" className="w-32 h-auto" />
            <Link className="btn btn-primary" to="monza">
              Monza
            </Link>
          </article>
        </section>
        <input type="range" min={0} max="100" defaultValue="40" className="range range-primary" />
      </section>
      <div className="grid grid-cols-2 grid-flow-col">
        <section>
          <ConstructorLeaderboard />
        </section>
        <section>
          <DriverLeaderboard />
        </section>
      </div>
    </main>
  )
}
