import React from "react"
import logo from "../../assets/logo.svg"
import "./index.css"

type Props = Readonly<{ children?: React.ReactNode }>

function callAPI() {
  fetch("http://localhost:5000")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log("ERROR", error))
}

export function App(_: Props) {
  callAPI()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
