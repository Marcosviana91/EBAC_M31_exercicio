import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { StyledContact, StyledContactList } from './style'
import { Contact as PropsContact } from '../../utils/Types'

export const Contact = (props: PropsContact) => (
  <StyledContact>
    <h2>{props.name}</h2>
    <div>
      <h3>Telefone:</h3> <output>{props.tel}</output>
    </div>
    <div>
      <h3>E-mail:</h3> <output>{props.email}</output>
    </div>
  </StyledContact>
)

export const ContactList = () => {
  const contactList = useSelector(
    (state: RootReducer) => state.globalReducer.list
  )

  return (
    <StyledContactList>
      {contactList.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          tel={contact.tel}
        />
      ))}
    </StyledContactList>
  )
}
