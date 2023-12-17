"use client";

import { useRef } from "react";
import {
  FiShare,
  FiXSquare,
  FiRefreshCcw,
  FiMoreVertical,
} from "react-icons/fi";
import { useUsername } from "~app/hooks";
import { Button, Dropdown, ToastHandle, CopyToast, onCopyClick } from "..";

type Props = {
  refetch: () => void;
};

export const Username: React.FC<Props> = ({ refetch }) => {
  const { username, updateUsername } = useUsername();
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
              <Dropdown
                trigger={
                  <Button palette="tertiary" icon>
                    <FiMoreVertical />
                  </Button>
                }
                items={[
                  {
                    label: "Share",
                    icon: <FiShare />,
                    onClick: () => onCopyClick(toastRef),
                  },
                  {
                    label: "Refresh",
                    icon: <FiRefreshCcw />,
                    onClick: refetch,
                  },
                  {
                    label: "Reset",
                    icon: <FiXSquare />,
                    onClick: () => updateUsername(""),
                  },
                ]}
              />
            </span>
          </div>
        </h1>
      </div>
      <CopyToast toastRef={toastRef} />
    </>
  );
};
