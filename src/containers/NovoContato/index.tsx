import { StyledCreateContact } from './style'

export const CreateContact = () => (
  <StyledCreateContact>
    <div>
      <h3>Nome:</h3> <output>Fulano de Tal da Silva e Souza</output>
    </div>
    <div>
      <h3>Telefone:</h3> <output>(00) 0.0000-0000</output>
    </div>
    <div>
      <h3>E-mail:</h3> <output>email@teste.com</output>
    </div>
  </StyledCreateContact>
)
