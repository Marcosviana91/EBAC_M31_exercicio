import { styled } from 'styled-components'

export const StyledContact = styled.li`
  width: 100%;
  height: max-content;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;

  h2 {
    font-size: 32px;
  }

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
export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
  min-height: 80vh;

  padding: 10px;
  margin-bottom: 50px;
`
