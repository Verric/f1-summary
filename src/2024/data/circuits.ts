import BahrainCircuit from "../../assets/2024/circuit_layouts/bahrain_circuit.avif"
import BahrainTyres from "../../assets/2024/tyre_guides/bahrain.avif"
import BahrainPitStop from "../../assets/2024/pit-stops/bahrain.jpg"
import SaudiArabiaTyres from "../../assets/2024/tyre_guides/saudi_arabia_tyre_guide.avif"
import SaudiArabiaPitStop from "../../assets/2024/pit-stops/saudi-arabia.jpg"
import AustraliaTyreGuide from "../../assets/2024/tyre_guides/australia_tyre_guide.avif"
import AustraliaPitStop from "../../assets/2024/pit-stops/australia.jpg"
import JapanTyreGuide from "../../assets/2024/tyre_guides/japan_tyre_guide.avif"
import JapanPitStop from "../../assets/2024/pit-stops/japan.jpg"
import ChinaTyreGuide from "../../assets/2024/tyre_guides/china_tyre_guide.avif"
import ChinaPitStop from "../../assets/2024/pit-stops/china_pit_stops.jpg"
import MiamiTyreGuide from "../../assets/2024/tyre_guides/miami_tyre_guide.avif"
import MiamiPitStop from "../../assets/2024/pit-stops/miami_pit_stop.jpg"
import ImolaTyreGuide from "../../assets/2024/tyre_guides/imola_tyre_guide.avif"
import ImolaPitStop from "../../assets/2024/pit-stops/imola_pit_stop.jpg"
import MonacoTyreGuide from "../../assets/2024/tyre_guides/monaco_tyre_guide.avif"
import MonacoPitStop from "../../assets/2024/pit-stops/monaco_pit_stop.jpg"
import CanadaTyreGuide from "../../assets/2024/tyre_guides/canada_tyre_guide.avif"
import CanadaPitStop from "../../assets/2024/pit-stops/canada_pit_stop.jpg"
import SpainTyreGuide from "../../assets/2024/tyre_guides/spain_tyre_guide.avif"
import SpainPitStop from "../../assets/2024/pit-stops/spain_pit_stop.jpg"
import AustriaTyreGuide from "../../assets/2024/tyre_guides/austria_tyre_guide.avif"
import AustriaPitStop from "../../assets/2024/pit-stops/austria_pit_stop.jpg"
import BritishTyreGuide from "../../assets/2024/tyre_guides/british_tyre_guide.avif"
import BritishPitStop from "../../assets/2024/pit-stops/british_pit_stop.jpg"
import HungaryTyreGuide from "../../assets/2024/tyre_guides/hungary_tyre_guide.avif"
import HungaryPitStop from "../../assets/2024/pit-stops/hungary_pit_stop.jpg"
import BelgiumTyreGuide from "../../assets/2024/tyre_guides/belgium_tyre_guide.avif"
import BelgiumPitStop from "../../assets/2024/pit-stops/belgium_pit_stop.jpg"
import NetherlandsTyreGuide from "../../assets/2024/tyre_guides/netherlands_tyre_guide.avif"
import NetherlandsPitStop from "../../assets/2024/pit-stops/netherlands_pit_stop.jpg"
import ItalianTyreGuide from "../../assets/2024/tyre_guides/italian_tyre_guide.avif"
import ItalianPitStop from "../../assets/2024/pit-stops/italy_pit_stop.jpg"
import AzerbaijanTyreGuide from "../../assets/2024/tyre_guides/azerbaijan_tyre_guide.avif"
import AzerbaijanPitStop from "../../assets/2024/pit-stops/azerbaijan_pit_stop.jpg"

export interface Circuit {
  name: string
  location: string
  laps: number
  lapDistance: number
  raceDistance: number
  layout?: string
  tyreGuide: string
  pitStopGuide?: string
}

export const circuits: Record<string, Circuit> = {
  bahrain: {
    name: "Bahrain Grand Prix",
    location: "Bahrain",
    laps: 57,
    lapDistance: 5.412,
    raceDistance: 308.238,
    layout: BahrainCircuit,
    tyreGuide: BahrainTyres,
    pitStopGuide: BahrainPitStop,
  },
  saudiArabia: {
    name: "Saudi Arabian Grand Prix",
    location: "Saudi Arabia",
    laps: 60,
    lapDistance: 6.174,
    raceDistance: 308.45,
    layout: undefined,
    tyreGuide: SaudiArabiaTyres,
    pitStopGuide: SaudiArabiaPitStop,
  },
  australia: {
    name: "Australian Grand Prix",
    location: "Australia",
    laps: 58,
    lapDistance: 5.278,
    raceDistance: 306.124,
    layout: undefined,
    tyreGuide: AustraliaTyreGuide,
    pitStopGuide: AustraliaPitStop,
  },
  japan: {
    name: "Japanese Grand Prix",
    location: "Japan",
    laps: 53,
    lapDistance: 5.807,
    raceDistance: 307.471,
    layout: undefined,
    tyreGuide: JapanTyreGuide,
    pitStopGuide: JapanPitStop,
  },
  china: {
    name: "Chinese Grand Prix",
    location: "China",
    laps: 56,
    lapDistance: 5.451,
    raceDistance: 305.066,
    layout: undefined,
    tyreGuide: ChinaTyreGuide,
    pitStopGuide: ChinaPitStop,
  },
  miami: {
    name: "Miami Grand Prix",
    location: "Miami",
    laps: 57,
    lapDistance: 5.412,
    raceDistance: 308.326,
    layout: undefined,
    tyreGuide: MiamiTyreGuide,
    pitStopGuide: MiamiPitStop,
  },
  imola: {
    name: "Imola Grand Prix",
    location: "Imola",
    laps: 63,
    lapDistance: 4.909,
    raceDistance: 309.049,
    layout: undefined,
    tyreGuide: ImolaTyreGuide,
    pitStopGuide: ImolaPitStop,
  },
  monaco: {
    name: "Monaco Grand Prix",
    location: "Monaco",
    laps: 78,
    lapDistance: 3.337,
    raceDistance: 260.286,
    layout: undefined,
    tyreGuide: MonacoTyreGuide,
    pitStopGuide: MonacoPitStop,
  },
  canada: {
    name: "Candadian Grand Prix",
    location: "Canada",
    laps: 70,
    lapDistance: 4.361,
    raceDistance: 305.27,
    layout: undefined,
    tyreGuide: CanadaTyreGuide,
    pitStopGuide: CanadaPitStop,
  },
  spain: {
    name: "Spanish Grand Prix",
    location: "Spain",
    laps: 66,
    lapDistance: 4.657,
    raceDistance: 307.236,
    layout: undefined,
    tyreGuide: SpainTyreGuide,
    pitStopGuide: SpainPitStop,
  },
  austria: {
    name: "Austrian Grand Prix",
    location: "Austria",
    laps: 71,
    lapDistance: 4.318,
    raceDistance: 306.452,
    layout: undefined,
    tyreGuide: AustriaTyreGuide,
    pitStopGuide: AustriaPitStop,
  },
  greatBritain: {
    name: "British Grand Prix",
    location: "Great Britain",
    laps: 52,
    lapDistance: 5.891,
    raceDistance: 306.198,
    layout: undefined,
    tyreGuide: BritishTyreGuide,
    pitStopGuide: BritishPitStop,
  },
  hungary: {
    name: "Hungarian Grand Prix",
    location: "Hungary",
    laps: 70,
    lapDistance: 4.381,
    raceDistance: 306.63,
    layout: undefined,
    tyreGuide: HungaryTyreGuide,
    pitStopGuide: HungaryPitStop,
  },
  belgium: {
    name: "Belgium Grand Prix",
    location: "Belgium",
    laps: 44,
    lapDistance: 7.004,
    raceDistance: 308.052,
    layout: undefined,
    tyreGuide: BelgiumTyreGuide,
    pitStopGuide: BelgiumPitStop,
  },
  netherlands: {
    name: "Dutch Grand Prix",
    location: "Netherlands",
    laps: 72,
    lapDistance: 4.259,
    raceDistance: 306.587,
    layout: undefined,
    tyreGuide: NetherlandsTyreGuide,
    pitStopGuide: NetherlandsPitStop,
  },
  italy: {
    name: "Italian Grand Prix",
    location: "Italy",
    laps: 53,
    lapDistance: 5.793,
    raceDistance: 306.72,
    layout: undefined,
    tyreGuide: ItalianTyreGuide,
    pitStopGuide: ItalianPitStop,
  },
  azerbaijan: {
    name: "Azerbaijan Grand Prix",
    location: "azerbaijan",
    laps: 51,
    lapDistance: 6.003,
    raceDistance: 306.049,
    layout: undefined,
    tyreGuide: AzerbaijanTyreGuide,
    pitStopGuide: AzerbaijanPitStop,
  },
}
