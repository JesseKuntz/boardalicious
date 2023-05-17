import { useState, useEffect } from "react";

const USERNAME_KEY = "username";

export const useUsername = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const _username = window.localStorage.getItem(USERNAME_KEY);

    if (_username) {
      setUsername(_username);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(USERNAME_KEY, username);
  }, [username]);

  return { username, setUsername };
};
