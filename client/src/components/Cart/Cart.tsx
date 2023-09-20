import { useEffect, useState } from "react";
import "./Cart.css"

interface ICartItem {
    id: string
    quantity: number
}

function Cart() {
    const [cart, setCart] = useState<ICartItem[]>([])

    useEffect(() => {
        if(localStorage.getItem("cart")) {
            const cartFromStorage = JSON.parse(localStorage.getItem("cart")!)
            setCart(cartFromStorage)
        } else {
            setCart([])
        }
    },[])

    async function handlePayment() {

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

        const { url } = await response.json()
        window.location = url;
        console.log("Redirecting to checkout:", url);
    }
  return (
    <div>
        {/* <h1>{item.id}</h1>
        <p>{item.quantity}</p> */}
        <button onClick={handlePayment}>GE MIG PENGAR TACK</button>
        {/* <Cart cart={cart} /> */}
    </div>
  )
}

export default Cart