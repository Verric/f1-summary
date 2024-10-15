"use client"
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
          <th>Delta To Next</th>
          <th>Delta To Top</th>
        </tr>
      </thead>
      <tbody>
        {data.map((driver, index) => (
          <tr key={index} className="hover">
            <td className="flex">{driver.pos}</td>
            <td>{driver.name}</td>
            <td>{driver.points}</td>
            <td>{driver.points - data[index - 1]?.points || 0}</td>
            <td>{driver.points - data[0].points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
