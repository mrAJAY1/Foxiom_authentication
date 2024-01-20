import { useEffect, useState } from "react";

const useFetch = () => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await fetch("/api/auth/user");
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else if (res.status === 401) {
        setUser(null);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return user;
};

export default useFetch;
