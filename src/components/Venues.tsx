import { Link } from "react-router-dom"
import { kebabCase } from "lodash-es"
import Bahrain from "../assets/2024/circuit_icons/bahrain-outline.png"
import SaudiArabia from "../assets/2024/circuit_icons/saudi-arabia-outline.png"
import Australia from "../assets/2024/circuit_icons/australia-outline.png"
import Japan from "../assets/2024/circuit_icons/japan-outline.png"
import China from "../assets/2024/circuit_icons/china-outline.png"
import Miami from "../assets/2024/circuit_icons/miami-outline.png"
import Imola from "../assets/2024/circuit_icons/imola-outline.png"
import Monaco from "../assets/2024/circuit_icons/monaco-outline.png"
import Canada from "../assets/2024/circuit_icons/canada-outline.png"
import Spain from "../assets/2024/circuit_icons/spain-outline.png"
import Austria from "../assets/2024/circuit_icons/austria-outline.png"
import Belgium from "../assets/2024/circuit_icons/belgium-outline.png"
import GreatBritain from "../assets/2024/circuit_icons/great-britain-outline.png"
import Hungary from "../assets/2024/circuit_icons/hungary-outline.png"
import Netherlands from "../assets/2024/circuit_icons/netherlands-outline.png"
import Italy from "../assets/2024/circuit_icons/monza-outline.png"
import Azerbaijan from "../assets/2024/circuit_icons/azerbaijan-outline.png"

export default function Venues() {
  return (
    <main className="flex justify-evenly">
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
    </main>
  )
}

function LinkCard({ image, name }: { image: string; name: string }) {
  return (
    <Link
      className="tooltip flex justify-center items-center rounded-lg hover:bg-slate-100"
      to={kebabCase(name)}
      data-tip={name}
    >
      <img src={image} alt={`${kebabCase(name)} circuit`} className="w-24 h-auto" />
    </Link>
  )
}
