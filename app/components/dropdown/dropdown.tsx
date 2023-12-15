import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { twMerge as tw } from "tailwind-merge";

type Item = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

type Props = {
  trigger: React.ReactNode;
  items: Item[];
};

export const Dropdown: React.FC<Props> = ({ trigger, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <span>{trigger}</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded backdrop-blur-3xl border border-gray-700 shadow-lg shadow-black"
          sideOffset={8}
        >
          {items.map(({ label, icon, onClick }, index) => (
            <DropdownMenu.Item key={label} onClick={onClick}>
              <div
                className={tw(
                  "flex gap-2 items-center hover:bg-slate-700 p-2 cursor-pointer",
                  index === 0 && "rounded-t",
                  index === items.length - 1 && "rounded-b"
                )}
              >
                {label}
                {icon}
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
