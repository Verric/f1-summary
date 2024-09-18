import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Leaderboards from "./dashboard/LeaderboardLayout.tsx"
import RaceReport from "./components/RaceReport.tsx"

import { circuits } from "./data/circuits.ts"
import { results } from "./data/results.ts"
import AppLayout from "./components/AppLayout.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<main>About</main>} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Leaderboards />} />
          <Route path="bahrain" element={<RaceReport results={results.bahrain} circuit={circuits.bahrain} />} />
          <Route
            path="saudi-arabia"
            element={<RaceReport results={results.saudiArabia} circuit={circuits.saudiArabia} />}
          />
          <Route path="australia" element={<RaceReport results={results.australia} circuit={circuits.australia} />} />
          <Route path="japan" element={<RaceReport results={results.japan} circuit={circuits.japan} />} />
          <Route path="china" element={<RaceReport results={results.china} circuit={circuits.china} />} />
          <Route path="miami" element={<RaceReport results={results.miami} circuit={circuits.miami} />} />
          <Route path="imola" element={<RaceReport results={results.imola} circuit={circuits.imola} />} />
          <Route path="monaco" element={<RaceReport results={results.monaco} circuit={circuits.monaco} />} />
          <Route path="canada" element={<RaceReport results={results.canada} circuit={circuits.canada} />} />
          <Route path="spain" element={<RaceReport results={results.spain} circuit={circuits.spain} />} />
          <Route path="austria" element={<RaceReport results={results.austria} circuit={circuits.austria} />} />
          <Route
            path="great-britain"
            element={<RaceReport results={results.greatBritain} circuit={circuits.greatBritain} />}
          />
          <Route path="hungary" element={<RaceReport results={results.hungary} circuit={circuits.hungary} />} />
          <Route path="belgium" element={<RaceReport results={results.belgium} circuit={circuits.belgium} />} />
          <Route
            path="netherlands"
            element={<RaceReport results={results.netherlands} circuit={circuits.netherlands} />}
          />
          <Route path="italy" element={<RaceReport results={results.italy} circuit={circuits.italy} />} />
          <Route
            path="azerbaijan"
            element={<RaceReport results={results.azerbaijan} circuit={circuits.azerbaijan} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
