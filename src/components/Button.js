import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Button.scss";

export const Button = ({ text, path }) => {
  return (
    <Link to={path} className="btn">
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};
