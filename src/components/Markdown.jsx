import React from "react";
import styled from "@emotion/styled"

import markdownContext from "../utils/markdownContext";

export default function Markdown(){
  const { isLightTheme } = React.useContext(markdownContext)

  return (
    <Wrapper light={isLightTheme}>

      HEYYOOO

    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: ${p => p.light ? 'var(--grey-100)' : 'var(--grey-1000)'};
  color: ${p => p.light ? 'var(--grey-900)' : 'var(--grey-100)'};
`;