import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from "react-router-dom"
import MonzaReport from "./2024/MonzaReport.tsx"
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
            <main className="max-h-screen w-screen">
              <nav className="w-full h-10 flex bg-slate-400">
                <Link to="/2024">Home</Link>
                <Link className="ml-4" to="/about">
                  About
                </Link>
              </nav>
              <Outlet />
            </main>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="italy" element={<MonzaReport />} />
          <Route path="bahrain" element={<GenericReport circuitInfo={circuits.bahrain} />} />
          <Route path="gen" element={<GenericReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
