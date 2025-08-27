import styled from "@emotion/styled"

export default function Sidebar() {
  return (
    <Wrapper>
      Heyy . . . Its Sidebar here!!!
      Heyy . . . Its Sidebar here!!!
      Heyy . . . Its Sidebar here!!!
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: min(calc(250 / 16 * 1rem), 80vw);
`;