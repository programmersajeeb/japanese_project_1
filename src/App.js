import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Routing } from "./Routing/Routing"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default App
