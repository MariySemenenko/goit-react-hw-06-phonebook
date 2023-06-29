
import { useDispatch, useSelector } from 'react-redux';
import { Ul } from '../StyledApp.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

// відображаю список контактів і маю можливість видаляти контакт зі списку
//при кліку на кнопку виконується функція onDeletContacts
export const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts)
  const dispatch = useDispatch()
  return (
    <Ul>

      {contactsList.map(
        (
          { name, number, id } // кожен контакт має властивість name, number, id
        ) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        )
      )}
    </Ul>
  );
};


