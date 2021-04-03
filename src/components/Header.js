import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({ title, onAdd, showaddtask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showaddtask ? "red" : "green"}
          text={showaddtask ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
  // style={headingstyle}
};

Header.defaultProps = {
  title: "Task Tracker",
};

// const headingstyle={
//     color:"red",backgroundColor:"black"
// }
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
