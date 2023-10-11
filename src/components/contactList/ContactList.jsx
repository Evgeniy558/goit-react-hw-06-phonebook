import { useDispatch } from "react-redux";
import Button from "../contactForm/button/Button";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import { deleteContact } from "../redux/slices/contactsSlice";

const ContactList = ({ displayedContacts }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {displayedContacts.map((el) => {
        return (
          <li key={el.id} className={css.list_item}>
            <div className={css.container_info}>
              {el.name}: {el.number}
            </div>
            <Button
              className={css.align_btn}
              type="button"
              onClick={() => handleDeleteContact(el.id)}
              typebutton={"button_del"}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  displayedContacts: PropTypes.array.isRequired,
};
export default ContactList;
