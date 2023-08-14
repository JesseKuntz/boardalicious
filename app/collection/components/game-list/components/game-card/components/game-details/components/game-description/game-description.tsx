type Props = {
  description: string;
};

// TODO: use an html parser to handle the entities
export const GameDescription: React.FC<Props> = ({ description }) => {
  return <div>{description}</div>;
};
