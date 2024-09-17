import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import Dashboard from "./2024/dashboard/Dashboard.tsx"
import GenericReport from "./2024/GenericReport.tsx"

import { circuits } from "./2024/data/circuits.ts"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/2024" />} />
        <Route path="/about" element={<main>About</main>} />
        <Route
          path="/2024"
          element={
            <main className="h-screen w-screen ">
              <Outlet />
            </main>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="bahrain" element={<GenericReport circuitInfo={circuits.bahrain} />} />
          <Route path="saudi-arabia" element={<GenericReport circuitInfo={circuits.saudiArabia} />} />
          <Route path="australia" element={<GenericReport circuitInfo={circuits.australia} />} />
          <Route path="japan" element={<GenericReport circuitInfo={circuits.japan} />} />
          <Route path="china" element={<GenericReport circuitInfo={circuits.china} />} />
          <Route path="miami" element={<GenericReport circuitInfo={circuits.miami} />} />
          <Route path="imola" element={<GenericReport circuitInfo={circuits.imola} />} />
          <Route path="monaco" element={<GenericReport circuitInfo={circuits.monaco} />} />
          <Route path="canada" element={<GenericReport circuitInfo={circuits.canada} />} />
          <Route path="spain" element={<GenericReport circuitInfo={circuits.spain} />} />
          <Route path="austria" element={<GenericReport circuitInfo={circuits.austria} />} />
          <Route path="great-britain" element={<GenericReport circuitInfo={circuits.greatBritain} />} />
          <Route path="hungary" element={<GenericReport circuitInfo={circuits.hungary} />} />
          <Route path="belgium" element={<GenericReport circuitInfo={circuits.belgium} />} />
          <Route path="netherlands" element={<GenericReport circuitInfo={circuits.netherlands} />} />
          <Route path="italy" element={<GenericReport circuitInfo={circuits.italy} />} />
          <Route path="azerbaijan" element={<GenericReport circuitInfo={circuits.azerbaijan} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
