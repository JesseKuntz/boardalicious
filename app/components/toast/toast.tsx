import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { twMerge as tw } from "tailwind-merge";

export const ToastProvider = ToastPrimitive.ToastProvider;

export type ToastHandle = {
  publish: () => void;
};

type Props = {
  children: React.ReactNode;
} & ToastPrimitive.ToastProps;

export const Toast = React.forwardRef<ToastHandle, Props>(
  (props, forwardedRef) => {
    const { children, ...toastProps } = props;
    const [count, setCount] = React.useState(0);

    React.useImperativeHandle(forwardedRef, () => ({
      publish: () => setCount((count) => count + 1),
    }));

    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <ToastPrimitive.Root
            className={tw(
              "backdrop-blur-md border border-gray-700 p-4 rounded",
              "data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)]",
              "data-[state=closed]:animate-[hide_100ms_ease-in]"
            )}
            key={index}
            duration={2000}
            {...toastProps}
          >
            <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
          </ToastPrimitive.Root>
        ))}
      </div>
    );
  }
);

export const ToastViewport: React.FC = () => {
  return (
    <ToastPrimitive.ToastViewport className="fixed bottom-0 right-0 flex p-2 flex-col gap-2" />
  );
};
