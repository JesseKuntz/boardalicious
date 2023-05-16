type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="text-xl py-2 px-6 transition-all duration-200 bg-teal-700 rounded hover:bg-teal-900 disabled:bg-gray-500 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};
