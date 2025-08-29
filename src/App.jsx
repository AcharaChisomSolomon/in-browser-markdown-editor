import React from "react"
import styled from "@emotion/styled"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Markdown from "./components/Markdown"

// eslint-disable-next-line no-unused-vars
import markdownContext from "./utils/markdownContext"
import useGetLightTheme from "./hooks/useGetLightTheme"
import useGetData from "./hooks/useGetData"

export default function App() {
  const [documents, ...docFunctions] = useGetData()
  const [currentDoc, setCurrentDoc] = React.useState(null)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [isLightTheme, setIsLightTheme] = useGetLightTheme()
  
  React.useEffect(() => {
    setCurrentDoc(documents[0])
  }, [documents])

  if (!documents) return null

  const necessaryStates = {
    showSidebar,
    setShowSidebar,
    isLightTheme,
    setIsLightTheme,
    currentDoc,
    setCurrentDoc,
    docFunctions,
    documents
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
  overflow: hidden;
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