export function filterContacts(contacts, filter) {
  return contacts.filter((el) => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });
}
