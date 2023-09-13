import { PropsWithChildren, createContext, useState } from "react";
// import { useNavigate } from "react-router";

export interface IUser {
    name: string,
    email: string,
    password: string
}
export interface Credentials {
    email: string,
    password: string
  }

 interface UserContext {
    login: (credentials: Credentials) => void,
    // registerUser: () => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContext = createContext<UserContext>(null as any)

function UserProvider({ children }: PropsWithChildren) {

    const [loggedinUser, setLoggedinUser] = useState(null)
    // const navigate = useNavigate();

async function login(credentials: Credentials) {
    try {
      const res = await fetch("/api/users/login", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });

      if (res.ok) {
        const user = await res.json()
        console.log("Inloggning lyckades. Serverrespons:", res);
        setLoggedinUser(user)
        // navigate('/');
      }
    } catch (error) {
      console.log("Fel vid inloggning:", error);
    }
  }
  return (
    <UserContext.Provider value={{login}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;