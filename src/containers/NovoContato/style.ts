import { styled } from 'styled-components'

export const StyledCreateContact = styled.form`
  width: 100%;
  height: max-content;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: end;

    input {
      font-size: 18px;
      width: 350px;
      /* border-radius: 4px; */
    }
  }
  div {
    border-top: 1px solid gray;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
  }
`
