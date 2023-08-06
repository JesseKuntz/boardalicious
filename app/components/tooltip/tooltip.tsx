import * as RadixTooltip from "@radix-ui/react-tooltip";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Tooltip: React.FC<Props> = ({ trigger, children }) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root delayDuration={0}>
      <RadixTooltip.Trigger>{trigger}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className="bg-black p-4 rounded max-w-sm z-50">
          <RadixTooltip.Arrow width={20} height={10} />
          {children}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);
