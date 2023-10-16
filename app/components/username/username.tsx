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
        <div className="flex gap-2">
          <span className="flex items-center gap-2 rounded bg-slate-700 pl-4 pr-1 py-1">
            {username}
            <Button palette="tertiary" onClick={() => setUsername("")} icon>
              <FiXSquare />
            </Button>
          </span>
          <div className="flex items-center">
            <Button
              palette="tertiary"
              onClick={() => {
                refetch();
                setRefetchButtonClicked(true);
                setTimeout(() => setRefetchButtonClicked(false), 5000);
              }}
              disabled={refetchButtonClicked}
              icon
            >
              <FiRefreshCcw />
            </Button>
          </div>
        </div>
      </h1>
    </div>
  );
};
