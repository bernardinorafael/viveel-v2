import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import PagesRoute from "./routes"
import { GlobalStyles } from "./styles/globals"
import theme from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <PagesRoute />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
