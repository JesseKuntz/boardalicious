import * as RadixDialog from "@radix-ui/react-dialog";
import { FiXSquare } from "react-icons/fi";
import { Button } from "..";

type Props = { trigger: React.ReactNode; children: React.ReactNode };

export const Modal: React.FC<Props> = ({ trigger, children }) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed z-10 bg-black/50 top-0 bottom-0 left-0 right-0 grid place-items-center overflow-y-auto" />
      <RadixDialog.Content className="fixed z-20 rounded bg-slate-800 border-2 border-slate-700 p-6 md:max-h-[96vh] max-h-full overflow-y-auto w-full md:max-w-2xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-auto">
        {children}
        <RadixDialog.Close className="absolute top-2 right-2">
          <Button palette="tertiary" icon as="div">
            <FiXSquare />
          </Button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
