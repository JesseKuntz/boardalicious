import { twMerge as tw } from "tailwind-merge";

type Palette = "primary" | "secondary";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  palette?: Palette;
  classNameOverride?: string;
};

export const paletteStyles: { [key in Palette]: string } = {
  primary: "bg-teal-700 hover:bg-teal-900",
  secondary: "bg-transparent hover:bg-slate-900 px-2",
};
export const baseStyles =
  "text-xl py-2 px-6 transition-all duration-200 rounded disabled:bg-gray-500 disabled:cursor-not-allowed";

export const Button: React.FC<Props> = ({
  children,
  palette = "primary",
  classNameOverride,
  ...props
}) => {
  return (
    <button
      className={tw(baseStyles, paletteStyles[palette], classNameOverride)}
      {...props}
    >
      {children}
    </button>
  );
};
