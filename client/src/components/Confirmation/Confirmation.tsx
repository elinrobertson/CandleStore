import { AiFillCheckCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import "./Confirmaion.css"

function Confirmation() {

  const [isPaymentVerified, setIsPaymentVerified] = useState(false)

  useEffect(() => {
    const sessionId = localStorage.getItem("session-id")

    const verifyPayment = async () => {
      const response = await fetch("http://localhost:3000/api/checkout/verify-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({sessionId}),
      });

      if (!response.ok) {
        throw new Error("Något gick fel med anropet till servern.");
      }

      const { verified } = await response.json()

      if(verified) {
        setIsPaymentVerified(true)
        localStorage.removeItem("session-id")
        localStorage.removeItem("cart")
      } else {
        setIsPaymentVerified(false)
      }
    }
    verifyPayment()
  }, [])

    return (
        isPaymentVerified ?   <div className="confirmation-div">
        <div className="checkmark">
          <AiFillCheckCircle />
        </div>
        <h3>Tack för ditt köp</h3>
      </div> : <h3>Något gick fel</h3>
    )
  }
  
  export default Confirmation





