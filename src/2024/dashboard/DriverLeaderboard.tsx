import drivers from "../../assets/2024/driverStandings.json"

export default function DriverLeaderboard() {
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
