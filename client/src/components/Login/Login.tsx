import { useState, useContext} from "react"
import { UserContext } from "../Context/UserContext"
import "./Login.css"

function Login() {
  const {login} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="input-div">
    <h1>Logga in</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" required></input>
    <button onClick={() => login({email, password})}>Logga in</button>
</div>
  )
}

export default Login;