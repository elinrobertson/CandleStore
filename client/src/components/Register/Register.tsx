import { useState, useContext} from "react"
import { UserContext } from "../Context/UserContext"
import "./Register.css"

function Register() {

  const { registerUser } = useContext(UserContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="register-div">
        <h1>Registrera ny användare</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Namn" required></input>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required></input>
            <button onClick={() => registerUser({name, email, password})}>Registrera</button>
    </div>
  )
}

export default Register