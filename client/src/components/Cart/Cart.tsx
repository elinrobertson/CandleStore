import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import "./Cart.css"

interface ICartItem {
    id: string
    quantity: number
}

function Cart() {
    const [cart, setCart] = useState<ICartItem[]>([])
    const userContext = useContext(UserContext)

    useEffect(() => {
        if(localStorage.getItem("cart")) {
            const cartFromStorage = JSON.parse(localStorage.getItem("cart")!)
            setCart(cartFromStorage)
        } else {
            setCart([])
        }
    },[])

    async function handlePayment() {

        if(!userContext || !userContext.loggedinUser) {
            alert("Du måste logga in för att gå till kassan")
            return;
        }

        const items = cart.map(item => ({
            price: item.id, 
            quantity: item.quantity,
          }));

        console.log("Items to be sent to server:", items);
          
        const response = await fetch("http://localhost:3000/api/checkout/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart),
        })

        if(!response.ok) {
            console.error("Failed to create checkout session.");
            return;
        }

        const { url, sessionId } = await response.json()
        localStorage.setItem("session-id", sessionId)
        window.location = url;
        console.log("Redirecting to checkout:", url);
    }
  return (
      <div className="cart-div">
        <h1>Kundvagn</h1>
        {cart.map((item) => (
        <div className="cart-card" key={item.id}>
            <h3>Antal: {item.quantity} st</h3>
        </div>
        ))}
        <button onClick={ handlePayment }>Gå till kassan</button>
    </div>
  );
}


export default Cart