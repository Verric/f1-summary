import { getConstructorsStandings } from "../data/results"

export default function ConstructorLeaderboard({ race }: { race: number }) {
  const data = getConstructorsStandings(race)
  return (
    <main>
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
          {data.map((team, index) => (
            <tr key={index} className="hover">
              <td>{team.position}</td>
              <td>
                {team.team} / {team.chassis}
              </td>
              <td>
                <img className="w-36 h-auto" src={team.carImage} alt={`${team.team} car`} />
              </td>
              <td>{team.points}</td>
              <td>{team.points - data[index - 1]?.points || 0}</td>
              <td>{team.points - data[0].points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
