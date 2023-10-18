import { StyledContact, StyledContactList } from './style'

export const Contact = () => (
  <StyledContact>
    <div>
      <h3>Nome:</h3> <output>Fulano de Tal da Silva e Souza</output>
    </div>
    <div>
      <h3>Telefone:</h3> <output>(00) 0.0000-0000</output>
    </div>
    <div>
      <h3>E-mail:</h3> <output>email@teste.com</output>
    </div>
  </StyledContact>
)

export const ContactList = () => (
  <StyledContactList>
    <Contact></Contact>
    <Contact></Contact>
  </StyledContactList>
)
