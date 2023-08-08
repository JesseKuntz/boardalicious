import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { twMerge as tw } from "tailwind-merge";

type Item<Value> = {
  content: React.ReactNode;
  value: Value;
};

type Props<Value> = {
  onValueChange: (value: Value) => void;
  items: Item<Value>[];
  value: Value;
};

export const ToggleGroup = <Value extends string>({
  onValueChange,
  items,
  value,
}: Props<Value>) => (
  <RadixToggleGroup.Root
    type="single"
    value={value}
    onValueChange={onValueChange}
    className="rounded bg-slate-700 w-fit p-2 space-x-2"
  >
    {items.map(({ content, value: itemValue }) => (
      <RadixToggleGroup.Item
        key={itemValue}
        value={itemValue}
        className={tw(
          "rounded py-1 px-2 transition-all duration-200",
          itemValue === value
            ? "bg-slate-100 text-slate-800"
            : "hover:bg-slate-900"
        )}
      >
        {content}
      </RadixToggleGroup.Item>
    ))}
  </RadixToggleGroup.Root>
);
