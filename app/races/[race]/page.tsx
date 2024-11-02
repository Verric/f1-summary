import Image from "next/image"
import { PositionChange } from "../../components/PostionChange"
import CircuitStats from "../../components/CircuitStats"
import { circuits } from "../../data/circuits"
import { results } from "../../data/results"
// import { useContext } from "react"
// import { UnitContext } from "../pages/AppLayout"
// import { kmToMi } from "../utils/conversionUtils"
export async function generateStaticParams() {
  return Object.keys(circuits).map(x => ({ race: x }))
}

export default function RaceReport({ params }: { params: { race: string } }) {
  const { race } = params
  const circuit = circuits[race]
  const result = results[race]
  //const isImperial = useContext(UnitContext)
  return (
    <main className="max-h-full grid grid-cols-2 gap-2">
      <section>
        <h2 className="text-4xl">Summary: {circuit.name}</h2>
        <CircuitStats circuit={circuit} />
        <div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Starting</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Time/Retired</th>
                <th>Fastest Lap</th>
                {/* <th>Avg Speed {isImperial ? "mi/h" : "km/h"} </th> */}
                <th>Avg Speed km/h </th>
              </tr>
            </thead>
            <tbody>
              {result.drivers.map((driver, index) => (
                <tr key={index} className="hover">
                  <td className="flex">
                    {driver.pos}
                    <PositionChange starting={driver.startingPos} final={driver.pos} />
                  </td>
                  <td>{driver.startingPos}</td>
                  <td>{driver.driverId}</td>
                  <td>{driver.teamId}</td>
                  <td>{driver.time}</td>
                  <td>{driver.fastestLap}</td>
                  {/* <td>{isImperial ? `${kmToMi(driver.avgSpeed).toFixed(2)}` : `${driver.avgSpeed.toFixed(2)}`}</td> */}
                  <td>{`${driver.avgSpeed.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className=" grid grid-flow-row-dense">
        <Image loading="eager" width={1000} className="h-auto" src={circuit.pitStopGuide} alt="pit stops" />
        <Image loading="eager" priority width={1000} className="h-auto" src={circuit.tyreGuide} alt="tyre guides" />
      </section>
    </main>
  )
}
