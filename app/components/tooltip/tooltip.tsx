import * as RadixTooltip from "@radix-ui/react-tooltip";
import { useToggle } from "usehooks-ts";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Tooltip: React.FC<Props> = ({ trigger, children }) => {
  const [openTooltip, toggleTooltip, setTooltip] = useToggle();

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={openTooltip}>
        <RadixTooltip.Trigger asChild>
          <span
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            {trigger}
          </span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="bg-black p-4 rounded max-w-sm z-50">
            <RadixTooltip.Arrow width={20} height={10} />
            {children}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
