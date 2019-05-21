import React from "react"
import ReactDOM from "react-dom"
import { App } from "."
import { shallowRender } from "../../utils/shallowRender"

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App makeRequest={jest.fn()} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders expected structure", () => {
    const received = shallowRender(<App makeRequest={jest.fn()} />)
    expect(received).toMatchSnapshot()
  })
})
