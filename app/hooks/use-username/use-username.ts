import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "~utils/routes";

export const USERNAME_KEY = "username";

export const useUsername = () => {
  const [username, setUsername] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchParamsUsername = searchParams.get(USERNAME_KEY);

    setUsername(searchParamsUsername || "");
  }, [searchParams]);

  const updateUsername = (newUsername: string) => {
    router.push(
      `${pathname}?${createQueryString({
        key: USERNAME_KEY,
        value: newUsername,
        searchParams,
      })}`,
      { scroll: false }
    );
  };

  return {
    username,
    updateUsername,
  };
};
