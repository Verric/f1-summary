import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { camelCase, kebabCase } from "lodash-es"
import Bahrain from "../assets/circuit_icons/bahrain-outline.png"
import SaudiArabia from "../assets/circuit_icons/saudi-arabia-outline.png"
import Australia from "../assets/circuit_icons/australia-outline.png"
import Japan from "../assets/circuit_icons/japan-outline.png"
import China from "../assets/circuit_icons/china-outline.png"
import Miami from "../assets/circuit_icons/miami-outline.png"
import Imola from "../assets/circuit_icons/imola-outline.png"
import Monaco from "../assets/circuit_icons/monaco-outline.png"
import Canada from "../assets/circuit_icons/canada-outline.png"
import Spain from "../assets/circuit_icons/spain-outline.png"
import Austria from "../assets/circuit_icons/austria-outline.png"
import Belgium from "../assets/circuit_icons/belgium-outline.png"
import GreatBritain from "../assets/circuit_icons/great-britain-outline.png"
import Hungary from "../assets/circuit_icons/hungary-outline.png"
import Netherlands from "../assets/circuit_icons/netherlands-outline.png"
import Italy from "../assets/circuit_icons/monza-outline.png"
import Azerbaijan from "../assets/circuit_icons/azerbaijan-outline.png"
import Singapore from "../assets/circuit_icons/singapore-outline.png"
import UnitedStates from "../assets/circuit_icons/united-states-outline.png"
import Mexico from "../assets/circuit_icons/mexico-outline.png"
import Brazil from "../assets/circuit_icons/brazil-outline.png"
import LasVegas from "../assets/circuit_icons/las-vegas-outline.png"
import Qatar from "../assets/circuit_icons/qatar-outline.png"
import AbuDhabi from "../assets/circuit_icons/abu-dhab-outline.png"

export default function RaceSelectionPage() {
  return (
    <main className="grid md:grid-cols-4 md:grid-rows-6 gap-4 grid-cols-3 grid-rows-8 bg-slate-100">
      <LinkCard image={Bahrain} name="Bahrain" />
      <LinkCard image={SaudiArabia} name="Saudi Arabia" />
      <LinkCard image={Australia} name="Australia" />
      <LinkCard image={Japan} name="Japan" />
      <LinkCard image={China} name="China" />
      <LinkCard image={Miami} name="Miami" />
      <LinkCard image={Imola} name="Imola" />
      <LinkCard image={Monaco} name="Monaco" />
      <LinkCard image={Canada} name="Canada" />
      <LinkCard image={Spain} name="Spain" />
      <LinkCard image={Austria} name="Austria" />
      <LinkCard image={GreatBritain} name="Great Britain" />
      <LinkCard image={Hungary} name="Hungary" />
      <LinkCard image={Belgium} name="Belgium" />
      <LinkCard image={Netherlands} name="Netherlands" />
      <LinkCard image={Italy} name="Italy" />
      <LinkCard image={Azerbaijan} name="Azerbaijan" />
      <LinkCard image={Singapore} name="Singapore" />
      <LinkCard image={UnitedStates} name="United States" />
      <LinkCard image={Mexico} name="Mexico" />
      <EmptyCard image={Brazil} name="Brazil" />
      <EmptyCard image={LasVegas} name="Las Vegas" />
      <EmptyCard image={Qatar} name="Qatar" />
      <EmptyCard image={AbuDhabi} name="Abu Dhabi" />
    </main>
  )
}

function LinkCard({ image, name }: { image: StaticImageData; name: string }) {
  return (
    <Link
      className="flex flex-col justify-center items-center rounded-lg shadow-md bg-white hover:bg-orange-400"
      href={`/races/${camelCase(name)}`}
    >
      <Image src={image} alt={`${kebabCase(name)} circuit`} className="w-32 h-auto" />
      <h2 className="text-2xl">{name}</h2>
    </Link>
  )
}

function EmptyCard({ image, name }: { image: StaticImageData; name: string }) {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-md bg-gray-400">
      <Image src={image} alt={`${kebabCase(name)} circuit`} className="w-32 h-auto" />
      <h2 className="text-2xl">{name}</h2>
    </div>
  )
}
