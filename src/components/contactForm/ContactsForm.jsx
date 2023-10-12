import { nanoid } from "nanoid";
import css from "./ContactsForm.module.css";
import Button from "./button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/slices/contactsSlice";
import { getContacts } from "../redux/selectors";

const patternName = "^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$";
const patternTel = "^\\+48\\d{3}\\d{3}\\d{3}$";

const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find((el) => {
        return el.name.toLocaleLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          id={nanoid()}
          type="text"
          name="name"
          pattern={patternName}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern={patternTel}
          placeholder="+48XXXXXXXXX"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button typeButton={"button_add"}>ADD CONTACTS</Button>
    </form>
  );
};

export default Form;
