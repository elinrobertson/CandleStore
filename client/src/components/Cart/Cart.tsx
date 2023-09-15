import "./Cart.css"

function Cart() {
    const cart = [
        {
            product: "price_1NmuuWE1FJ0VahcJm2ur2Stb",
            quantity: 1
        },
        {
            product: "price_1Nmus3E1FJ0VahcJE9JRY0Z9",
            quantity: 1
        }
    ]
    async function handlePayment() {
        const response = await fetch("http://localhost:3000/api/checkout/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart),
        })

        if(!response.ok) {
            return;
        }

        const { url } = await response.json()
        window.location = url;
    }

  return (
    <div>
        <button onClick={handlePayment}>GE MIG PENGAR TACK</button>
    </div>
  )
}

export default Cart