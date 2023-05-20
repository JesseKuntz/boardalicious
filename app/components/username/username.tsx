"use client";

import { FiXSquare } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";
import { USERNAME_STORAGE_KEY } from "~utils";
import { Button } from "..";

export const Username: React.FC = () => {
  const [username, setUsername] = useLocalStorage(USERNAME_STORAGE_KEY, "");

  return (
    <div className="flex gap-4">
      <h1 className="text-2xl flex items-center gap-2">
        Username:
        <span className="flex items-center gap-2 rounded bg-slate-700 px-4 py-1">
          {username}
          <Button palette="secondary" onClick={() => setUsername("")}>
            <FiXSquare />
          </Button>
        </span>
      </h1>
    </div>
  );
};
