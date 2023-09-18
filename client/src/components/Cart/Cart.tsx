import "./Cart.css"

interface ICartItem {
    id: string
    quantity: number
}

interface Props {
    cart: ICartItem[]
 }
 
function Cart({cart} : Props) {

    async function handlePayment() {
        if (!cart) {
            console.error("Cart is undefined or null.");
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
            body: JSON.stringify({ line_items: items }),
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
        <button onClick={handlePayment}>GE MIG PENGAR TACK</button>
    </div>
  )
}

export default Cart