import React from "react"
import styled from "@emotion/styled"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Markdown from "./components/Markdown"

// eslint-disable-next-line no-unused-vars
import markdownContext from "./utils/markdownContext"
import useGetLightTheme from "./hooks/useGetLightTheme"

export default function App() {
  const [showSidebar, setShowSidebar] = React.useState(true)
  const [fileName, setFileName] = React.useState("welcome.md")
  const [isLightTheme, setIsLightTheme] = useGetLightTheme()

  const necessaryStates = {
    showSidebar,
    setShowSidebar,
    fileName,
    setFileName,
    isLightTheme,
    setIsLightTheme
  }

  return (
    <markdownContext.Provider value={necessaryStates}>

      <Container tomove={showSidebar}>
        <Wrapper tomove={showSidebar}>
          <Sidebar />
          <SubWrapper>
            <Header />
            <Markdown />
          </SubWrapper>
        </Wrapper>
      </Container>

    </markdownContext.Provider>
  )
}

const Container = styled.div`
  overflow: ${p => p.tomove && 'hidden'};
`;

const Wrapper = styled.div`
  transform: ${p => p.tomove && 'translateX(min(calc(250 / 16 * 1rem), 80vw))'};
  transition: transform 250ms;
`;

const SubWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;