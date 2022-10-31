import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"

function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  )
}

export default PagesRoute
