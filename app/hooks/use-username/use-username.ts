import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const USERNAME_KEY = "username";

export const useUsername = () => {
  const [username, setUsername] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const searchParamsUsername = searchParams.get(USERNAME_KEY);

    setUsername(searchParamsUsername || "");
  }, [searchParams]);

  const updateUsername = (newUsername: string) => {
    router.push(`${pathname}?${createQueryString(USERNAME_KEY, newUsername)}`);
  };

  return {
    username,
    updateUsername,
  };
};
