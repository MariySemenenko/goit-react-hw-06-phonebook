import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../StyledApp.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
//поле введення яке фільтрує контакти за іменем
//value поточне значення при введені
//onChange спрацьовує на зміни і передає нове значення
export const Filter = () => {
  //пропси
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      <label>
        Find contacts by name
        <input
          type="name"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value.trim()))}
        />
      </label>
    </Label>
  );
};
