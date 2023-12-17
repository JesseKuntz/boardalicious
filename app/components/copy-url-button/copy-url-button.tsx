import { RefObject, useRef } from "react";
import { FiShare, FiCheckSquare } from "react-icons/fi";
import { Button, Toast, ToastHandle } from "..";

export const onCopyClick = async (toastRef: RefObject<ToastHandle>) => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toastRef?.current?.publish();
  } catch (e) {}
};

type Props = {
  toastRef: RefObject<ToastHandle>;
};

export const CopyToast: React.FC<Props> = ({ toastRef }) => (
  <Toast ref={toastRef}>
    <div className="flex items-center gap-4">
      <FiCheckSquare />
      URL Copied
    </div>
  </Toast>
);

export const CopyURLButton = () => {
  const toastRef = useRef<ToastHandle>(null);

  return (
    <>
      <Button palette="tertiary" onClick={() => onCopyClick(toastRef)} icon>
        <FiShare />
      </Button>
      <CopyToast toastRef={toastRef} />
    </>
  );
};
