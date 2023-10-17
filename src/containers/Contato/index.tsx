import { StyledContact, StyledContactList } from './style'

export const Contact = () => (
  <StyledContact>
    <h3>
      Nome: <output>Fulano de Tal da Silva e Souza</output>
    </h3>
    <h3>
      Telefone: <output>(00) 0.0000-0000</output>
    </h3>
    <h3>
      E-mail: <output>email@teste.com</output>
    </h3>
  </StyledContact>
)

export const ContactList = () => (
  <StyledContactList>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
  </StyledContactList>
)
