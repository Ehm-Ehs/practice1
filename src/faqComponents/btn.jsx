import "./btn.css"
import ar from "../images/ar.svg"
function Button (){
  const handleClick = (e) => {}

  return (
    <>
      <button onClick={(e) => handleClick} className="green">
        <a className="links" href="#">Subscribe</a>
        <img src={ar} alt="" className="btn-img" />
      </button>
    </>
  );
};

export default Button;
