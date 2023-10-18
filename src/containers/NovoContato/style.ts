import { styled } from 'styled-components'

export const StyledCreateContact = styled.form`
  width: 100%;
  height: max-content;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;

  div {
    display: flex;
    justify-content: space-between;
    align-items: end;

    output {
      font-size: 18px;
      text-align: right;
    }
  }
`
