import { Link } from "react-router-dom"
import MonzaOutline from "../../assets/2024/circuit_icons/monza-outline.png"
import BahrainOutline from "../../assets/2024/circuit_icons/bahrain-outline.png"
import SaudiArabiaOutline from "../../assets/2024/circuit_icons/saudi-arabia-outline.png"
import AustraliaOutline from "../../assets/2024/circuit_icons/australia-outline.png"
import LeaderboardLayout from "./LeaderbaordLayout"

export default function Dashboard() {
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
      </section>
      <LeaderboardLayout />
    </main>
  )
}
