import { useEffect, useState } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import Form from "./components/contactForm/ContactsForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { saveToLocalStorage } from "./components/serveces/saveToLocalStorage";
import { getFromLocalStorage } from "./components/serveces/getFromLocalStorage";
import { filterContacts } from "./components/serveces/filterContacts";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "./components/redux/selectors";
import { addContact } from "./components/redux/slices/contactsSlice";
export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([]);
  // const [filter, setfilter] = useState("");

  // useEffect(() => {
  //   const contacts = getFromLocalStorage();
  //   if (contacts && contacts.length) {
  //     setContacts((prevState) => {
  //       const updateContacts = { ...prevState, ...contacts };
  //       return updateContacts;
  //     });
  //   }
  // }, []);

  useEffect(() => {
    saveToLocalStorage(contacts);
    if (contacts.length === 0) {
      localStorage.removeItem("contacts");
    }
  }, [contacts]);

  const addNewContact = (formData) => {
    const { name, number } = formData;
    if (
      contacts.find((el) => {
        return el.name.toLocaleLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
      // setContacts((prevContacts) => {
      //   const updatedContacts = [
      //     ...prevContacts,
      //     { id: nanoid(), name: name, number: number },
      //   ];
      //   return updatedContacts;
      // });
    }
  };

  const handleSearch = (SearchValue) => {
    setfilter(SearchValue);
  };

  const deleteContact = (id) => {
    const contactsAfterDel = getFromLocalStorage().filter((el) => {
      return el.id !== id;
    });
    setContacts(contactsAfterDel);
  };

  const displayedContacts = filter
    ? filterContacts(contacts, filter)
    : contacts;

  return (
    <div className="App">
      <header className={css.appheader}>
        <section className={css.section}>
          <h1>Phonebook</h1>
          <Form onSubmit={addNewContact} />
        </section>
        <section className={css.section}>
          <h2>Contacts</h2>
          <Filter onChange={handleSearch} />
          {displayedContacts.length > 0 ? (
            <ContactList
              displayedContacts={displayedContacts}
              onClick={deleteContact}
            />
          ) : (
            <p> No contacts </p>
          )}
        </section>
      </header>
    </div>
  );
};
