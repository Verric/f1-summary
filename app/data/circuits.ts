import type { StaticImageData } from "next/image"
import BahrainTyres from "../assets/tyre_guides/bahrain.avif"
import BahrainPitStop from "../assets/pit-stops/bahrain.jpg"
import SaudiArabiaTyres from "../assets/tyre_guides/saudi_arabia_tyre_guide.avif"
import SaudiArabiaPitStop from "../assets/pit-stops/saudi-arabia.jpg"
import AustraliaTyreGuide from "../assets/tyre_guides/australia_tyre_guide.avif"
import AustraliaPitStop from "../assets/pit-stops/australia.jpg"
import JapanTyreGuide from "../assets/tyre_guides/japan_tyre_guide.avif"
import JapanPitStop from "../assets/pit-stops/japan.jpg"
import ChinaTyreGuide from "../assets/tyre_guides/china_tyre_guide.avif"
import ChinaPitStop from "../assets/pit-stops/china_pit_stops.jpg"
import MiamiTyreGuide from "../assets/tyre_guides/miami_tyre_guide.avif"
import MiamiPitStop from "../assets/pit-stops/miami_pit_stop.jpg"
import ImolaTyreGuide from "../assets/tyre_guides/imola_tyre_guide.avif"
import ImolaPitStop from "../assets/pit-stops/imola_pit_stop.jpg"
import MonacoTyreGuide from "../assets/tyre_guides/monaco_tyre_guide.avif"
import MonacoPitStop from "../assets/pit-stops/monaco_pit_stop.jpg"
import CanadaTyreGuide from "../assets/tyre_guides/canada_tyre_guide.avif"
import CanadaPitStop from "../assets/pit-stops/canada_pit_stop.jpg"
import SpainTyreGuide from "../assets/tyre_guides/spain_tyre_guide.avif"
import SpainPitStop from "../assets/pit-stops/spain_pit_stop.jpg"
import AustriaTyreGuide from "../assets/tyre_guides/austria_tyre_guide.avif"
import AustriaPitStop from "../assets/pit-stops/austria_pit_stop.jpg"
import BritishTyreGuide from "../assets/tyre_guides/british_tyre_guide.avif"
import BritishPitStop from "../assets/pit-stops/british_pit_stop.jpg"
import HungaryTyreGuide from "../assets/tyre_guides/hungary_tyre_guide.avif"
import HungaryPitStop from "../assets/pit-stops/hungary_pit_stop.jpg"
import BelgiumTyreGuide from "../assets/tyre_guides/belgium_tyre_guide.avif"
import BelgiumPitStop from "../assets/pit-stops/belgium_pit_stop.jpg"
import NetherlandsTyreGuide from "../assets/tyre_guides/netherlands_tyre_guide.avif"
import NetherlandsPitStop from "../assets/pit-stops/netherlands_pit_stop.jpg"
import ItalianTyreGuide from "../assets/tyre_guides/italian_tyre_guide.avif"
import ItalianPitStop from "../assets/pit-stops/italy_pit_stop.jpg"
import AzerbaijanTyreGuide from "../assets/tyre_guides/azerbaijan_tyre_guide.avif"
import AzerbaijanPitStop from "../assets/pit-stops/azerbaijan_pit_stop.jpg"
import SingaporeTyreGuide from "../assets/tyre_guides/singapore_tyre_guide.avif"
import SingaporePitStop from "../assets/pit-stops/singapore_pit_stop.jpg"
import UnitedStatesTyreGuide from "../assets/tyre_guides/united_states_tyre_guide.avif"
import UnitedStatesPitStop from "../assets/pit-stops/united_states_pit_stop.jpg"
import MexicoTyreGuide from "../assets/tyre_guides/mexico_tyre_guide.avif"
import MexicoPitStop from "../assets/pit-stops/mexico_pit_stop.jpg"
import BrazilTyreGuide from "../assets/tyre_guides/brazil_tyre_guide.avif"

export interface Circuit {
  name: string
  location: string
  laps: number
  lapDistance: number
  raceDistance: number
  layout?: string
  tyreGuide: StaticImageData
  pitStopGuide: StaticImageData
}

export const circuits: Record<string, Circuit> = {
  bahrain: {
    name: "Bahrain Grand Prix",
    location: "Bahrain",
    laps: 57,
    lapDistance: 5.412,
    raceDistance: 308.238,
    tyreGuide: BahrainTyres,
    pitStopGuide: BahrainPitStop,
  },
  saudiArabia: {
    name: "Saudi Arabian Grand Prix",
    location: "Saudi Arabia",
    laps: 60,
    lapDistance: 6.174,
    raceDistance: 308.45,
    tyreGuide: SaudiArabiaTyres,
    pitStopGuide: SaudiArabiaPitStop,
  },
  australia: {
    name: "Australian Grand Prix",
    location: "Australia",
    laps: 58,
    lapDistance: 5.278,
    raceDistance: 306.124,
    tyreGuide: AustraliaTyreGuide,
    pitStopGuide: AustraliaPitStop,
  },
  japan: {
    name: "Japanese Grand Prix",
    location: "Japan",
    laps: 53,
    lapDistance: 5.807,
    raceDistance: 307.471,
    tyreGuide: JapanTyreGuide,
    pitStopGuide: JapanPitStop,
  },
  china: {
    name: "Chinese Grand Prix",
    location: "China",
    laps: 56,
    lapDistance: 5.451,
    raceDistance: 305.066,
    tyreGuide: ChinaTyreGuide,
    pitStopGuide: ChinaPitStop,
  },
  miami: {
    name: "Miami Grand Prix",
    location: "Miami",
    laps: 57,
    lapDistance: 5.412,
    raceDistance: 308.326,
    tyreGuide: MiamiTyreGuide,
    pitStopGuide: MiamiPitStop,
  },
  imola: {
    name: "Imola Grand Prix",
    location: "Imola",
    laps: 63,
    lapDistance: 4.909,
    raceDistance: 309.049,
    tyreGuide: ImolaTyreGuide,
    pitStopGuide: ImolaPitStop,
  },
  monaco: {
    name: "Monaco Grand Prix",
    location: "Monaco",
    laps: 78,
    lapDistance: 3.337,
    raceDistance: 260.286,
    tyreGuide: MonacoTyreGuide,
    pitStopGuide: MonacoPitStop,
  },
  canada: {
    name: "Candadian Grand Prix",
    location: "Canada",
    laps: 70,
    lapDistance: 4.361,
    raceDistance: 305.27,
    tyreGuide: CanadaTyreGuide,
    pitStopGuide: CanadaPitStop,
  },
  spain: {
    name: "Spanish Grand Prix",
    location: "Spain",
    laps: 66,
    lapDistance: 4.657,
    raceDistance: 307.236,
    tyreGuide: SpainTyreGuide,
    pitStopGuide: SpainPitStop,
  },
  austria: {
    name: "Austrian Grand Prix",
    location: "Austria",
    laps: 71,
    lapDistance: 4.318,
    raceDistance: 306.452,
    tyreGuide: AustriaTyreGuide,
    pitStopGuide: AustriaPitStop,
  },
  greatBritain: {
    name: "British Grand Prix",
    location: "Great Britain",
    laps: 52,
    lapDistance: 5.891,
    raceDistance: 306.198,
    tyreGuide: BritishTyreGuide,
    pitStopGuide: BritishPitStop,
  },
  hungary: {
    name: "Hungarian Grand Prix",
    location: "Hungary",
    laps: 70,
    lapDistance: 4.381,
    raceDistance: 306.63,
    tyreGuide: HungaryTyreGuide,
    pitStopGuide: HungaryPitStop,
  },
  belgium: {
    name: "Belgium Grand Prix",
    location: "Belgium",
    laps: 44,
    lapDistance: 7.004,
    raceDistance: 308.052,
    tyreGuide: BelgiumTyreGuide,
    pitStopGuide: BelgiumPitStop,
  },
  netherlands: {
    name: "Dutch Grand Prix",
    location: "Netherlands",
    laps: 72,
    lapDistance: 4.259,
    raceDistance: 306.587,
    tyreGuide: NetherlandsTyreGuide,
    pitStopGuide: NetherlandsPitStop,
  },
  italy: {
    name: "Italian Grand Prix",
    location: "Italy",
    laps: 53,
    lapDistance: 5.793,
    raceDistance: 306.72,
    tyreGuide: ItalianTyreGuide,
    pitStopGuide: ItalianPitStop,
  },
  azerbaijan: {
    name: "Azerbaijan Grand Prix",
    location: "azerbaijan",
    laps: 51,
    lapDistance: 6.003,
    raceDistance: 306.049,
    tyreGuide: AzerbaijanTyreGuide,
    pitStopGuide: AzerbaijanPitStop,
  },
  singapore: {
    name: "Singapore Grand Prix",
    location: "singapore",
    laps: 62,
    lapDistance: 4.94,
    raceDistance: 306.143,
    tyreGuide: SingaporeTyreGuide,
    pitStopGuide: SingaporePitStop,
  },
  unitedStates: {
    name: "United States Grand Prix",
    location: "united states",
    laps: 56,
    lapDistance: 5.513,
    raceDistance: 308.405,
    tyreGuide: UnitedStatesTyreGuide,
    pitStopGuide: UnitedStatesPitStop,
  },
  mexico: {
    name: "Mexico Grand Prix",
    location: "mexico",
    laps: 71,
    lapDistance: 4.304,
    raceDistance: 305.354,
    tyreGuide: MexicoTyreGuide,
    pitStopGuide: MexicoPitStop,
  },
  brazil: {
    name: "Brazil Grand Prix",
    location: "brazil",
    laps: 71,
    lapDistance: 4.309,
    raceDistance: 305.879,
    tyreGuide: BrazilTyreGuide,
    pitStopGuide: MexicoPitStop,
  },
  lasVegas: {
    name: "Las Vegas Grand Prix",
    location: "las vegas",
    laps: 50,
    lapDistance: 6.201,
    raceDistance: 309.958,
    tyreGuide: BrazilTyreGuide,
    pitStopGuide: MexicoPitStop,
  },
  qatar: {
    name: "Qatar Grand Prix",
    location: "qatar",
    laps: 57,
    lapDistance: 5.419,
    raceDistance: 308.611,
    tyreGuide: BrazilTyreGuide,
    pitStopGuide: MexicoPitStop,
  },
  abuDhabi: {
    name: "Abu Dhabi Grand Prix",
    location: "abu dhabi",
    laps: 58,
    lapDistance: 5.281,
    raceDistance: 306.183,
    tyreGuide: BrazilTyreGuide,
    pitStopGuide: MexicoPitStop,
  },
}
