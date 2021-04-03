import PropTypes from "prop-types";

const Button = ({ color, text,onClick }) => {
//   const onClick=(e)=>{
//       console.log('Click');//It will give the position of that click
//   }
    return (
    <div>
      <button style={{ backgroundColor: color }} className="btn"
      onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick:PropTypes.func
};
export default Button;
