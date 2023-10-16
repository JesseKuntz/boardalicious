import { twMerge as tw } from "tailwind-merge";

type Palette = "primary" | "secondary" | "tertiary";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  palette?: Palette;
  icon?: boolean;
  as?: keyof JSX.IntrinsicElements;
  classNameOverride?: string;
};

const paletteStyles: { [key in Palette]: string } = {
  primary: "bg-teal-700 hover:bg-teal-900",
  secondary: "bg-slate-700 hover:bg-slate-900",
  tertiary: "bg-transparent hover:bg-slate-900",
};
const baseStyles =
  "text-xl py-2 px-6 transition-all duration-200 rounded disabled:bg-gray-500 disabled:cursor-not-allowed";
const iconStyles = "px-2";

export const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  palette = "primary",
  icon,
  as = "button",
  classNameOverride,
}) => {
  const Tag = as;

  return (
    <Tag
      className={tw(
        baseStyles,
        paletteStyles[palette],
        icon && iconStyles,
        classNameOverride
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
