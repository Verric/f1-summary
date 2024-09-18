import { useContext } from "react"
import { Circuit } from "../data/circuits"
import { UnitContext } from "./AppLayout"
import { kmToMi } from "../utils/conversionUtils"

export default function CircuitStats({ circuit }: { circuit: Circuit }) {
  const isImperial = useContext(UnitContext)
  return (
    <div className="stats w-full ">
      <article className="stat">
        <p className="stat-title">Laps</p>
        <p className="stat-value">{circuit.laps}</p>
      </article>
      <article className="stat">
        <p className="stat-title">Lap Distance</p>
        <p className="stat-value">
          {isImperial ? `${kmToMi(circuit.lapDistance).toFixed(3)} mi` : `${circuit.lapDistance.toFixed(3)} km`}
        </p>
      </article>
      <article className="stat">
        <p className="stat-title">Race Distance</p>
        <p className="stat-value">
          {isImperial ? `${kmToMi(circuit.raceDistance).toFixed(3)} mi` : `${circuit.raceDistance.toFixed(3)} km`}
        </p>
      </article>
    </div>
  )
}
