

function Register() {
  return (
    <form>
        <h1>Registrera ny användare</h1>
            <input type="text" placeholder="Namn" name="name" id="name" required></input>
            <input type="text" placeholder="Email" name="email" id="email" required></input>
            <input type="password" placeholder="Password" name="psw" id="psw" required></input>
        <button>Registrera</button>
    </form>
  )
}

export default Register