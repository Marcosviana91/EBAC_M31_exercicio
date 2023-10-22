import { styled } from 'styled-components'

export const StyledContact = styled.li`
  width: 100%;
  height: max-content;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;
  position: relative;

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
  button {
    min-width: 24px;
    height: 24px;
    position: absolute;
    top: 8px;
    color: white;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;

    &#btn_remove,
    &#btn_edit_cancel {
      right: 8px;
      background-color: red;
    }
    &#btn_edit {
      padding: 0 8px;
      right: 40px;
      background-color: orangered;
    }
    &#btn_edit_save {
      padding: 0 8px;
      right: 40px;
      background-color: green;
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
