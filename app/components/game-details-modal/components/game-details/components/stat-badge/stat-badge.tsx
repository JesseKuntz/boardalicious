import { twMerge as tw } from "tailwind-merge";
import { Tooltip } from "~app/components";

type Props = {
  icon: React.ReactNode;
  value: string;
  tooltipText?: string;
  className?: string;
};

export const StatBadge: React.FC<Props> = ({
  icon,
  tooltipText,
  value,
  className,
}) => {
  return (
    <div className={tw("rounded bg-slate-700 py-2 px-4", className)}>
      <div className="flex gap-3 items-center">
        {tooltipText ? <Tooltip trigger={icon}>{tooltipText}</Tooltip> : icon}
        <span>{value}</span>
      </div>
    </div>
  );
};
