import { AiOutlineCheckCircle, AiOutlineCheck, AiFillCheckCircle } from 'react-icons/ai';
import { BsCheck2 } from 'react-icons/bs';
import "./Confirmaion.css"

function Confirmation() {
    return (
      <div className="confirmation-div">
        <div className="checkmark">
          {/* <AiOutlineCheckCircle />
          <AiOutlineCheck /> */}
          <AiFillCheckCircle />
          {/* <BsCheck2 /> */}
        </div>
        <h3>Tack för ditt köp</h3>
      </div>
    )
  }
  
  export default Confirmation