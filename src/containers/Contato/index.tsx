import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { removeContact, editContact } from '../../store/reducers/globalReducer'

import { StyledContact, StyledContactList } from './style'
import { Contact as PropsContact } from '../../utils/Types'

export const Contact = (props: PropsContact) => {
  const contact_from_list: PropsContact = {
    id: props.id,
    name: props.name,
    tel: props.tel,
    email: props.email
  }
  const [isEditing, setIsEditing] = useState(false)
  const [currentContact, setCurrentContact] = useState(contact_from_list)
  const dispatch = useDispatch()

  function saveContact() {
    dispatch(editContact(currentContact))
  }

  return (
    <StyledContact>
      {isEditing ? (
        <>
          <input
            value={currentContact.name}
            onChange={(evt) =>
              setCurrentContact({
                id: currentContact.id,
                name: evt.target.value,
                tel: currentContact.tel,
                email: currentContact.email
              })
            }
          />
          <div>
            <h3>Telefone:</h3>{' '}
            <input
              value={currentContact.tel}
              onChange={(evt) =>
                setCurrentContact({
                  id: currentContact.id,
                  name: currentContact.name,
                  tel: evt.target.value,
                  email: currentContact.email
                })
              }
            />
          </div>
          <div>
            <h3>E-mail:</h3>{' '}
            <input
              value={currentContact.email}
              onChange={(evt) =>
                setCurrentContact({
                  id: currentContact.id,
                  name: currentContact.name,
                  tel: currentContact.tel,
                  email: evt.target.value
                })
              }
            />
          </div>
          <button
            id="btn_edit_save"
            type="button"
            onClick={() => {
              setIsEditing(false)
              saveContact()
            }}
          >
            save
          </button>
          <button
            id="btn_edit_cancel"
            type="button"
            onClick={() => setIsEditing(false)}
          >
            X
          </button>
        </>
      ) : (
        <>
          <h2>{props.name}</h2>
          <div>
            <h3>Telefone:</h3> <output>{props.tel}</output>
          </div>
          <div>
            <h3>E-mail:</h3> <output>{props.email}</output>
          </div>
          <button
            id="btn_edit"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
          <button
            id="btn_remove"
            type="button"
            onClick={() => dispatch(removeContact(props.id))}
          >
            X
          </button>
        </>
      )}
    </StyledContact>
  )
}

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
