import css from "./button.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slices/contactsSlice";

const Button = ({ children, typebutton, idButton }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const classButton =
    typebutton === "button_add"
      ? css["button_add"]
      : typebutton === "button_del"
      ? css["button_del"]
      : css["button"];

  return (
    <div className={css.wrapper}>
      <button
        className={`${css.button} ${classButton}`}
        onClick={() => {
          handleDeleteContact(idButton);
        }}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  typebutton: PropTypes.string.isRequired,
  idButton: PropTypes.string,
};
export default Button;
