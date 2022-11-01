import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import TokenProvider from "./context/TokenContext"
import PagesRoute from "./routes"
import { GlobalStyles } from "./styles/globals"
import theme from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <TokenProvider>
          <PagesRoute />
        </TokenProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
