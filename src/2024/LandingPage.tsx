import { teamsData } from "./teamsData"
import drivers from "../assets/2024/driverStandings.json"
import MonzaOutline from "../assets/2024/monza/monza_outline.png"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <section className="flex-auto">
        <h2>Races</h2>
        <Link to="monza" className="block w-36 h-36">
          <figure>
            <img src={MonzaOutline} alt="monza" />
          </figure>
        </Link>
      </section>
      <div className="grid grid-cols-2 grid-flow-col">
        <section>
          <ConstructorsLadder />
        </section>
        <section>
          <DriversLadder />
        </section>
      </div>
    </main>
  )
}

function ConstructorsLadder() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Team / Chassis</th>
          <th>Car</th>
          <th>Points</th>
          <th>Delta to Next</th>
          <th>Delta to Top</th>
        </tr>
      </thead>
      <tbody>
        {teamsData.map((team, index) => (
          <tr key={index}>
            <td>{team.position}</td>
            <td>
              {team.team} / {team.chassis}
            </td>
            <td>
              <img className="w-36 h-auto" src={team.carImage} alt={`${team.team} car`} />
            </td>
            <td>{team.points}</td>
            <td>{team.points - teamsData[index - 1]?.points || 0}</td>
            <td>{team.points - teamsData[0].points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function DriversLadder() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Driver</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver, index) => (
          <tr key={index}>
            <td className="flex">{driver.position}</td>
            <td>{driver.name}</td>
            <td>{driver.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
