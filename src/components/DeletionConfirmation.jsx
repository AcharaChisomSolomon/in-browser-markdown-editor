import React from "react"
import styled from "@emotion/styled"
import * as Dialog from "@radix-ui/react-dialog"

import markdownContext from "../utils/markdownContext"
import UnstyledButton from "../utils/UnstyledButton"

export default function DeletionConfirmation({
  isOpen,
  onDismiss,
  id
}) {
  const { currentDoc, docFunctions } = React.useContext(markdownContext)

  const handleDeletion = id => {
    docFunctions[3](id)
    onDismiss()
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Container>
          <Content>
            <Title><span>Delete this document?</span></Title>
            <Description>
              <span>Are you sure you want to delete the '{currentDoc?.name || ''}' document and its contents?</span>
              <span>This action cannot be reversed.</span>
            </Description>
            <DeleteBtn
              onClick={() => handleDeletion(id)}
            >Confirm & Delete</DeleteBtn>
          </Content>
        </Container>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  background-color: var(--grey-opaque);
  inset: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  width: calc(min(calc(343 / 16 * 1rem), calc(100vw - 2rem)) + (2 * 1rem));
  padding-inline: 1rem;
`;

const Content = styled(Dialog.Content)`
  background-color: var(--bg);
  color: var(--text-input);
  font-family: var(--ff-markdown-output);
  padding: 1.5rem;
  border-radius: 0.25rem;
`;

const Title = styled(Dialog.Title)`
  font-size: var(--fs-m-h4);
  font-weight: var(--fw-bold);
`;

const Description = styled(Dialog.Description)`
  span {
    font-size: var(--fs-m-h6);
    display: block;
    font-weight: var(--fw-regular);
    line-height: 1.5rem;
  }
  padding-block: calc(20 / 16 * 1rem) calc(20 / 16 * 1rem);
`;

const DeleteBtn = styled(UnstyledButton)`
  display: block;
  width: 100%;
  height: 2.5rem;
  display: grid;
  place-content: center;
  background-color: var(--orange);
  border-radius: 0.25rem;
  font-size: var(--fs-h-15);
  font-weight: bold;

  &:hover {
    background-color: var(--orange-hover);
  }
`;