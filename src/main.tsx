import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import Dashboard from "./2024/dashboard/Dashboard.tsx"
import GenericReport from "./2024/GenericReport.tsx"

import { circuits } from "./2024/data/circuits.ts"
import { results } from "./2024/data/results.ts"
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
          <Route path="bahrain" element={<GenericReport results={results.bahrain} circuit={circuits.bahrain} />} />
          <Route
            path="saudi-arabia"
            element={<GenericReport results={results.saudiArabia} circuit={circuits.saudiArabia} />}
          />
          <Route
            path="australia"
            element={<GenericReport results={results.australia} circuit={circuits.australia} />}
          />
          <Route path="japan" element={<GenericReport results={results.japan} circuit={circuits.japan} />} />
          <Route path="china" element={<GenericReport results={results.china} circuit={circuits.china} />} />
          <Route path="miami" element={<GenericReport results={results.miami} circuit={circuits.miami} />} />
          <Route path="imola" element={<GenericReport results={results.imola} circuit={circuits.imola} />} />
          <Route path="monaco" element={<GenericReport results={results.monaco} circuit={circuits.monaco} />} />
          <Route path="canada" element={<GenericReport results={results.canada} circuit={circuits.canada} />} />
          <Route path="spain" element={<GenericReport results={results.spain} circuit={circuits.spain} />} />
          <Route path="austria" element={<GenericReport results={results.austria} circuit={circuits.austria} />} />
          <Route
            path="great-britain"
            element={<GenericReport results={results.greatBritain} circuit={circuits.greatBritain} />}
          />
          <Route path="hungary" element={<GenericReport results={results.hungary} circuit={circuits.hungary} />} />
          <Route path="belgium" element={<GenericReport results={results.belgium} circuit={circuits.belgium} />} />
          <Route
            path="netherlands"
            element={<GenericReport results={results.netherlands} circuit={circuits.netherlands} />}
          />
          <Route path="italy" element={<GenericReport results={results.italy} circuit={circuits.italy} />} />
          <Route
            path="azerbaijan"
            element={<GenericReport results={results.azerbaijan} circuit={circuits.azerbaijan} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
