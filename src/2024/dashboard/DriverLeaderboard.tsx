import { getDriverStandings } from "../data/results"

export default function DriverLeaderboard({ race }: { race: number }) {
  const data = getDriverStandings(race)
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
        {data.map((driver, index) => (
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
