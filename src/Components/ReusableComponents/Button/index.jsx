import "./Button.css";

const Button = (props) => {
  const {
    buttonName = "",
    handleClick = ()=>{},
    className = "",
    isDisabled = false,
    preIcon,
    postIcon,
    type = "button",
  } = props;

  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {preIcon}
      {buttonName}
      {postIcon}
    </button>
  );
};

export default Button;
