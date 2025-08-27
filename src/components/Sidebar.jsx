import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as Dialog from "@radix-ui/react-dialog";

import markdownContext from "../utils/markdownContext";
import VisuallyHidden from "../utils/VisuallyHidden";
import UnstyledButton from "../utils/UnstyledButton";

import Logo from "../assets/logo.svg"
import IconDocument from "../assets/icon-document.svg"

export default function Sidebar() {
  const { 
    showSidebar, 
    setShowSidebar,
    isLightTheme,
    setIsLightTheme
  } = React.useContext(markdownContext);
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (!showSidebar) {
      setIsClosing(true);
    } else {
      setIsClosing(false);
    }
  }, [showSidebar]);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      setShowSidebar(false);
    }
  };

  if (!showSidebar && !isClosing) return null;

  return (
    <Dialog.Root open={true} modal={false}>
      <Dialog.Portal>
        <Content
          data-closing={isClosing}
          onAnimationEnd={handleAnimationEnd}
        >

          <Title>
            <img src={Logo} alt="Markdown Editor Logo" />
            <VisuallyHidden>Sidebar Navigation</VisuallyHidden>
          </Title>

          <Description>
            MY DOCUMENTS
          </Description>

          <NewDocument>
            <span>+ New Document</span>
          </NewDocument>

          <Wrapper>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 November 2022</DocumentDate>
                <DocumentName>welcome.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
            <Document>
              <DocumentIcon><img src={IconDocument} alt="" /></DocumentIcon>
              <DocumentInfo>
                <DocumentDate>01 April 2022</DocumentDate>
                <DocumentName>Some-long-name-so-looong.md</DocumentName>
              </DocumentInfo>
            </Document>
          </Wrapper>

          <LightThemeContainer onClick={() => setIsLightTheme(c => !c)}>
            <DarkBtn light={isLightTheme}>
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z" fill="#5A6069"/></svg>
            </DarkBtn>
            <EnclosingBox light={isLightTheme}>
              <InnerBox></InnerBox>
            </EnclosingBox>
            <LightBtn light={isLightTheme}>
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z" fill="#5A6069"/></svg>
            </LightBtn>
          </LightThemeContainer>

        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const moveIn = keyframes`
  from {
    transform: translateX(calc(min(calc(250 / 16 * 1rem), 80vw) * -1));
  }
  to {
    transform: translateX(0);
  }
`;

const moveOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(min(calc(250 / 16 * 1rem), 80vw) * -1));
  }
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: min(calc(250 / 16 * 1rem), 80vw);
  animation: ${props => props['data-closing'] ? moveOut : moveIn} 250ms forwards cubic-bezier(0.4,0,0.2,1);

  background-color: var(--grey-900);
  padding:0  1.5rem 1.5rem;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
`;

const Title = styled(Dialog.Title)`
  height: clamp(3.5rem, 4.923vw + 2.346rem, 4.5rem);
  display: flex;
  align-items: center;
`;

const Description = styled(Dialog.Description)`
  color: var(--grey-500);
  letter-spacing: 2px;
  font-family: var(--ff-main);
  font-weight: var(--fw-regular);
  font-size: var(--fs-h-14);
  margin-block-end: calc(28 / 16 * 1rem);
`;

const NewDocument = styled(UnstyledButton)`
  height: calc(40 / 16 * 1rem);
  color: var(--grey-100);
  font-weight: var(--fw-regular);
  font-size: var(--fs-h-15);
  font-family: var(--ff-main);

  background-color: var(--orange);
  width: 100%;
  border-radius: 0.25rem;
  display: grid;
  place-content: center;
  margin-block-end: 1.5rem;

  &:hover {
    background-color: var(--orange-hover);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-end: 1.5rem;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--grey-700);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--grey-900);
  }
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: var(--grey-700) var(--grey-900); /* Firefox */
`;

const Document = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: var(--ff-main);

  &:hover, &:focus {
    div:last-of-type span:last-of-type {
      color: var(--orange);
    }
  }
`;

const DocumentIcon = styled.div`
  flex-shrink: 0;
`;

const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const DocumentDate = styled.span`
  color: var(--grey-500);
  font-size: var(--fs-b-13);
  font-weight: var(--fw-light);
`;

const DocumentName = styled.span`
  color: var(--grey-100);
  font-size: var(--fs-b-15);
  font-weight: var(--fw-regular);

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const LightThemeContainer = styled(UnstyledButton)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LightBtn = styled.span`
  svg {
    path {
      fill: ${p => p.light && 'var(--grey-100)'};
    }
  }
`;

const DarkBtn = styled.span`
  svg {
    path {
      fill: ${p => !p.light && 'var(--grey-100)'};
    }
  }
`;

const EnclosingBox = styled.span`
  display: block;
  width: 3rem;
  height: 1.5rem;
  background-color: var(--grey-600);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: ${p => p.light ? 'end' : 'start'};
  padding: 0.5rem;
`;

const InnerBox = styled.span`
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--grey-100);
`;