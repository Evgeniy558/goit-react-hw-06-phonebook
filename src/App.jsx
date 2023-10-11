import { useSelector } from "react-redux";
import css from "./App.module.css";
import Form from "./components/contactForm/ContactsForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { filterContacts } from "./components/serveces/filterContacts";
import { getContacts, getFilter } from "./components/redux/selectors";

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const displayedContacts = filter
    ? filterContacts(contacts, filter)
    : contacts;

  return (
    <div className="App">
      <header className={css.appheader}>
        <section className={css.section}>
          <h1>Phonebook</h1>
          <Form />
        </section>
        <section className={css.section}>
          <h2>Contacts</h2>
          <Filter />
          {displayedContacts.length > 0 ? (
            <ContactList displayedContacts={displayedContacts} />
          ) : (
            <p> No contacts </p>
          )}
        </section>
      </header>
    </div>
  );
};
