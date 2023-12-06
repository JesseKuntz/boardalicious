import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";

type Size = "sm" | "lg";

type Props = {
  src: string;
  alt: string;
  size?: Size;
};

export const GameImage: React.FC<Props> = ({ src, alt, size = "sm" }) => {
  const sizeMap: { [key in Size]: string } = {
    sm: "w-24",
    lg: "w-48",
  };

  return (
    <Image
      src={src}
      alt={alt}
      className={tw("border border-slate-500 rounded", sizeMap[size])}
      width={96}
      height={96}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsY/jfBwAEjgINT3lokAAAAABJRU5ErkJggg=="
    />
  );
};
