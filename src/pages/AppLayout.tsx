import { createContext, useState } from "react"
import { Outlet, Link } from "react-router-dom"
import Venues from "../components/Venues"

//apparently createContext takes a mandatory init value
export const UnitContext = createContext<boolean>(false)

export default function AppNav() {
  const [imperial, setUnit] = useState(false)
  const [dark, setDark] = useState(false)

  function toggleDark() {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "light")
      setDark(false)
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
      setDark(true)
    }
  }

  return (
    <main className="h-screen w-screen p-4 grid grid-rows-[0.5fr,_1fr_10fr] ">
      <nav className="flex justify-between border-b ">
        <div>
          <Link to="/" className="text-2xl">
            F1 Summary 2024
          </Link>
          <Link to="/about" className="text-2xl ml-4 border-l-2 p-4">
            About
          </Link>
        </div>
        <section className="flex  ">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Imperial Units</span>
              <input type="checkbox" className="toggle" checked={imperial} onChange={() => setUnit(!imperial)} />
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Dark Mode</span>
              <input type="checkbox" className="toggle" checked={dark} onChange={() => toggleDark()} />
            </label>
          </div>
        </section>
      </nav>
      <Venues />
      <UnitContext.Provider value={imperial}>
        <Outlet />
      </UnitContext.Provider>
    </main>
  )
}
