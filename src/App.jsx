import React from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

// eslint-disable-next-line no-unused-vars
import markdownContext from "./utils/markdownContext"
import styled from "@emotion/styled"

export default function App() {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [fileName, setFileName] = React.useState("welcome.md")

  const necessaryStates = {
    showSidebar,
    setShowSidebar,
    fileName,
    setFileName
  }

  return (
    <markdownContext.Provider value={necessaryStates}>

      <Wrapper>
        <Sidebar />
        <div>
          <Header />
          <main></main>
        </div>
      </Wrapper>

    </markdownContext.Provider>
  )
}

const Wrapper = styled.div`

`;