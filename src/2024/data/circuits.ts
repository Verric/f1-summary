import BahrainCircuit from "../../assets/2024/circuit_layouts/bahrain_circuit.avif"
import BahrainTyres from "../../assets/2024/tyre_guides/bahrain.avif"
import BahrainPitStop from "../../assets/2024/pit-stops/bahrain.jpg"

export interface Circuit {
  name: string
  location: string
  laps: number
  lapDistance: number
  raceDistance: number
  layout: string
  tyreGuide: string
  pitStopGuide?: string
}

export const circuits: Record<string, Circuit> = {
  bahrain: {
    name: "Gulf Air Bahrain Grand Prix 2024",
    location: "Bahrain",
    laps: 57,
    lapDistance: 5.412,
    raceDistance: 308.238,
    layout: BahrainCircuit,
    tyreGuide: BahrainTyres,
    pitStopGuide: BahrainPitStop,
  },
}
