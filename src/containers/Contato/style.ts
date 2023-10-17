import { styled } from 'styled-components'

export const StyledContact = styled.li`
  width: 300px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;

  h3 {
    display: flex;
    justify-content: space-between;

    output {
      text-align: right;
    }
  }
`
export const StyledContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 8px;

  padding: 8px;
  border: 1px solid black;
`
