import { createContext, useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

export const userContext = createContext({ user: null });

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userData = useFetch();

  useEffect(() => {
    setUser(userData);
  }, userData);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
