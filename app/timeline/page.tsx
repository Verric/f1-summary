import ConstructorLeaderboard from "../components/ConstructorLeaderboard"
import Chart from "./Chart"
export default function Timeline() {
  return (
    <main className="w-full h-full bg-gray-200 grid grid-cols-2 grid-rows-2 gap-2">
      <section className="bg-white">
        <Chart />
      </section>
      <section className="bg-white">Drivers Graph</section>
      <section className="bg-white">
        <ConstructorLeaderboard race={24} />
      </section>
      <section className="bg-white">Drivers Table</section>
    </main>
  )
}
