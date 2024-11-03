"use client"
import { useState } from "react"
import ConstructorLeaderboard from "./components/ConstructorLeaderboard"
import DriverLeaderboard from "./components/DriverLeaderboard"

export default function Home() {
  const [race, setRace] = useState(1)
  return (
    <main className="flex flex-col">
      <div className="flex flex-col">
        <input
          type="range"
          min={1}
          max={25}
          value={race}
          onChange={e => setRace(Number(e.target.value))}
          className="range range-primary"
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>Bahrain</span>
          <span>Saudi Arabia</span>
          <span>Australia</span>
          <span>Japan</span>
          <span>China - Sprint</span>
          <span>China</span>
          <span>Miami - Sprint</span>
          <span>Miami</span>
          <span>Imola</span>
          <span>Monaco</span>
          <span>Canada</span>
          <span>Spain</span>
          <span>Austria - Sprint</span>
          <span>Austria</span>
          <span>Great Britain</span>
          <span>Hungary</span>
          <span>Belgium</span>
          <span>Netherlands</span>
          <span>Italy</span>
          <span>Azerbaijan</span>
          <span>Singapore</span>
          <span>United States - Sprint</span>
          <span>United States</span>
          <span>Mexico</span>
          <span>Brazil - Sprint</span>
        </div>
        <section className="grid grid-cols-2">
          <ConstructorLeaderboard race={race} />
          <DriverLeaderboard race={race} />
        </section>
      </div>
    </main>
  )
}
