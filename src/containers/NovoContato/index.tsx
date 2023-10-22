import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addContact } from '../../store/reducers/globalReducer'

import {
  StyledButtonSalvar,
  StyledButtonLimpar,
  StyledButtonCancelar
} from '../../components/Buttons/style'
import { StyledCreateContact } from './style'
import { Contact as typeContact } from '../../utils/Types'

const emptyContact: typeContact = {
  id: '',
  name: '',
  tel: '',
  email: ''
}

export const CreateContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newContact, setNewContact] = useState(emptyContact)

  return (
    <StyledCreateContact
      onSubmit={(evt) => {
        evt.preventDefault()
        dispatch(addContact(newContact))
        navigate('/')
      }}
    >
      <label>
        <h3>Nome: </h3>
        <input
          type="text"
          placeholder="Digite um nome..."
          value={newContact.name}
          onChange={(evt) =>
            setNewContact({
              id: newContact.id,
              name: evt.target.value,
              tel: newContact.tel,
              email: newContact.email
            })
          }
        />
      </label>
      <label>
        <h3>Telefone: </h3>
        <input
          type="tel"
          placeholder="Digite um telefone..."
          value={newContact.tel}
          onChange={(evt) =>
            setNewContact({
              id: newContact.id,
              name: newContact.name,
              tel: evt.target.value,
              email: newContact.email
            })
          }
        />
      </label>
      <label>
        <h3>E-mail: </h3>
        <input
          type="email"
          placeholder="Digite um endereço eletrônico..."
          value={newContact.email}
          onChange={(evt) =>
            setNewContact({
              id: newContact.id,
              name: newContact.name,
              tel: newContact.tel,
              email: evt.target.value
            })
          }
        />
      </label>
      <div>
        <StyledButtonSalvar
          type="submit"
          onClick={() =>
            setNewContact({
              id: 'contact_' + Date.now(),
              name: newContact.name,
              tel: newContact.tel,
              email: newContact.email
            })
          }
        >
          Salvar
        </StyledButtonSalvar>
        <StyledButtonLimpar type="reset">Limpar</StyledButtonLimpar>
        <StyledButtonCancelar to={'/'}>Cancelar</StyledButtonCancelar>
      </div>
    </StyledCreateContact>
  )
}
