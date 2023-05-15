type BoxProps = {
  className: string;
};

const Box: React.FC<BoxProps> = ({ className }) => (
  <div className={`h-8 w-24 rounded bg-gradient-to-r ${className}`} />
);

export const Logo: React.FC = () => {
  return (
    <div>
      <Box className="from-rose-400 to-purple-950 ml-2" />
      <Box className="from-teal-400 to-pink-400" />
      <Box className="from-indigo-300 to-violet-700 ml-5" />
      <Box className="from-emerald-900 to-green-300" />
    </div>
  );
};
