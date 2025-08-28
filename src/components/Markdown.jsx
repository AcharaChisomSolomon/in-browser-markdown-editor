import React from "react";
import styled from "@emotion/styled"

import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";

import markdownContext from "../utils/markdownContext";
import { QUERIES } from "../utils/constants";

export default function Markdown(){
  const { isLightTheme } = React.useContext(markdownContext)
  const [showPreviewOnly, setShowPreviewOnly] = React.useState(false)

  return (
    <Wrapper 
      light={isLightTheme}
      show={showPreviewOnly}
    >

      <MarkdownInput 
        showPreviewOnly={showPreviewOnly}
        setShowPreviewOnly={setShowPreviewOnly}
      />
      <Hr show={showPreviewOnly} />
      <MarkdownOutput 
        showPreviewOnly={showPreviewOnly}
        setShowPreviewOnly={setShowPreviewOnly}
      />

    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  background-color: var(--bg);
  color: var(--text);

  @media ${QUERIES.tabletAndLarger} {
    grid-template-columns: ${p => !p.show && '1fr auto 1fr'};
  }
`;

const Hr = styled.hr`
  display: ${p => p.show && 'none'};
  border: none;
  width: 1px;
  background-color: var(--hr-line);

  @media ${QUERIES.tabletAndLarger} {
    display: ${p => p.show ? 'none' : 'block'};
  }
`;