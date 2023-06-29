export const selectContacts = ({ contacts: { items } }) => items;
export const selectFilter = ({ filter }) => filter;
export const selectVisibleContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
