import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import MonzaReport from "./2024/MonzaReport.tsx"
import LandingPage from "./2024/LandingPage.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/2024" />} />
        <Route
          path="/2024"
          element={
            <main>
              <Outlet />
            </main>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="monza" element={<MonzaReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
