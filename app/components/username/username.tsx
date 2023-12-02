"use client";

import { useState, useRef } from "react";
import {
  FiXSquare,
  FiRefreshCcw,
  FiShare,
  FiCheckSquare,
} from "react-icons/fi";
import { useUsername } from "~app/hooks";
import { Button, Toast, ToastHandle } from "..";

type Props = {
  refetch: () => void;
};

export const Username: React.FC<Props> = ({ refetch }) => {
  const { username, updateUsername } = useUsername();
  const [refetchButtonClicked, setRefetchButtonClicked] = useState(false);
  const toastRef = useRef<ToastHandle>(null);

  if (!username) {
    return null;
  }

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <h1 className="text-2xl flex items-center gap-2 flex-wrap">
          Username:
          <div className="flex gap-2">
            <span className="flex items-center gap-2 rounded bg-slate-700 pl-4 pr-1 py-1">
              {username}
              <Button
                palette="tertiary"
                onClick={() => updateUsername("")}
                icon
              >
                <FiXSquare />
              </Button>
            </span>
          </div>
        </h1>
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
        <div className="flex items-center">
          <Button
            palette="tertiary"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                toastRef?.current?.publish();
              } catch (e) {}
            }}
            icon
          >
            <FiShare />
          </Button>
        </div>
      </div>
      <Toast ref={toastRef}>
        <div className="flex items-center gap-4">
          <FiCheckSquare />
          URL Copied
        </div>
      </Toast>
    </>
  );
};
