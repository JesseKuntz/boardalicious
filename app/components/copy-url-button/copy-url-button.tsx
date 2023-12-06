import { useRef } from "react";
import { FiShare, FiCheckSquare } from "react-icons/fi";
import { Button, Toast, ToastHandle } from "..";

export const CopyURLButton = () => {
  const toastRef = useRef<ToastHandle>(null);

  return (
    <>
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
      <Toast ref={toastRef}>
        <div className="flex items-center gap-4">
          <FiCheckSquare />
          URL Copied
        </div>
      </Toast>
    </>
  );
};
