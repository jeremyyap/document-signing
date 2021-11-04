import React from "react"

export type UserState = null | {
  username: string;
  email: string;
  accessToken: string;
}

const initialState = null as UserState;

export const UserContext = React.createContext({
  user: initialState,
  setUser: (user: UserState) => {}
})

export const UserProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = React.useState(initialState);

  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}