"use client";

import { useState } from "react";
import { FiXSquare, FiRefreshCcw } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";
import { USERNAME_STORAGE_KEY } from "~utils";
import { Button } from "..";

type Props = {
  refetch: () => void;
};

export const Username: React.FC<Props> = ({ refetch }) => {
  const [username, setUsername] = useLocalStorage(USERNAME_STORAGE_KEY, "");
  const [refetchButtonClicked, setRefetchButtonClicked] = useState(false);

  if (!username) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <h1 className="text-2xl flex items-center gap-2 flex-wrap">
        Username:
        <span className="flex items-center gap-2 rounded bg-slate-700 px-4 py-1">
          {username}
          <Button palette="secondary" onClick={() => setUsername("")}>
            <FiXSquare />
          </Button>
        </span>
        <Button
          palette="secondary"
          onClick={() => {
            refetch();
            setRefetchButtonClicked(true);
            setTimeout(() => setRefetchButtonClicked(false), 5000);
          }}
          disabled={refetchButtonClicked}
        >
          <FiRefreshCcw />
        </Button>
      </h1>
    </div>
  );
};
