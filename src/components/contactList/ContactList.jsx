import Button from "../contactForm/button/Button";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ displayedContacts }) => {
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
              idButton={el.id}
              typeButton={"button_del"}
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
