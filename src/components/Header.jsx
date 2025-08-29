import React from "react"
import styled from "@emotion/styled"

import UnstyledButton from "../utils/UnstyledButton"
import VisuallyHidden from "../utils/VisuallyHidden"
import markdownContext from "../utils/markdownContext"
import { QUERIES } from "../utils/constants"

import IconMenu from "../assets/icon-menu.svg"
import IconClose from "../assets/icon-close.svg"
import IconSave from "../assets/icon-save.svg"
import IconDocument from "../assets/icon-document.svg"

export default function Header() {
  const { 
    showSidebar, 
    setShowSidebar,
    setCurrentDoc,
    currentDoc
  } = React.useContext(markdownContext)

  console.log(currentDoc)

  const updateDocName = e => {
    setCurrentDoc(doc => ({...doc, name: e.target.value}))
  }

  return (
    <Wrapper>

      <SidebarToggler onClick={() => setShowSidebar(c => !c)}>
        <img src={showSidebar ? IconClose : IconMenu} alt="" />
      </SidebarToggler>

      <InputContainer>
        <InputIcon><img src={IconDocument} alt="" /></InputIcon>
        <InputSubContainer>
          <span>Document Name</span>
          <Input 
            value={currentDoc?.name || ''} 
            type="text"
            onChange={updateDocName}
          />
        </InputSubContainer>
      </InputContainer>

      <Btns>
        <DeleteBtn>
          <VisuallyHidden>Delete</VisuallyHidden>
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" fill="#7C8187"/></svg>
        </DeleteBtn>
        <SaveBtn>
          <img src={IconSave} alt="" />
          <span>Save Changes</span>
        </SaveBtn>
      </Btns>

    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--grey-800);
  display: grid;
  gap: calc(24 / 16 * 1rem);
  align-items: center;
  padding-inline-end: clamp(0.5rem, 2.462vw + -0.077rem, 1rem);
  grid-template-columns: auto 1fr auto;
`;

const SidebarToggler = styled(UnstyledButton)`
  width: clamp(3.5rem, 4.923vw + 2.346rem, 4.5rem);
  height: clamp(3.5rem, 4.923vw + 2.346rem, 4.5rem);
  display: grid;
  place-content: center;
  background-color: var(--grey-700);

  &:hover {
    background-color: var(--orange);
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputIcon = styled.div`
  flex-shrink: 0;
`;

const InputSubContainer = styled.div`
  width: min(calc(400 / 16 * 1rem), 100%);

  span {
    display: none;
  }

  @media ${QUERIES.tabletAndLarger} {
    display: flex;
    flex-direction: column;

    span {
      display: revert;
      color: var(--grey-500);
      font-size: var(--fs-b-13);
      font-family: var(--ff-main);
      font-weight: var(--fw-light);
      letter-spacing: 0px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;
  color: var(--grey-100);
  font-size: var(--fs-b-15);
  font-family: var(--ff-main);
  font-weight: var(--fw-regular);
  letter-spacing: 0px;
  caret-color: var(--orange);
  border-bottom: 1px solid transparent;

  &:focus, &:hover {
    outline: none;
    border-bottom-color: var(--grey-100);
  }
`;

const Btns = styled.div`
  display: flex;
  gap: calc(24 / 16 * 1rem);
`;

const DeleteBtn = styled(UnstyledButton)`
  flex-shrink: 0;
  &:hover {
    svg {
      path {
        fill: var(--orange);
      }
    }
  }
`;

const SaveBtn = styled(UnstyledButton)`
  flex-shrink: 0;
  height: calc(40 / 16 * 1rem);
  padding-inline: clamp(0.75rem, 1.231vw + 0.462rem, 1rem);
  background-color: var(--orange);
  border-radius: 0.25em;

  span {
    font-family: var(--ff-main);
    font-weight: var(--fw-regular);
    font-size: var(--fs-h-15);
    display: none;
    color: var(--grey-100);
  }

  &:hover {
    background-color: var(--orange-hover);
  }

  @media ${QUERIES.tabletAndLarger} {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      display: revert;
    }
  }
`;