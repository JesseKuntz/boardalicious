import parse from "html-react-parser";

type Props = {
  description: string;
};

export const GameDescription: React.FC<Props> = ({ description }) => {
  const paragraphs = description.split("&#10;&#10;");

  return (
    <>
      {paragraphs.map((paragraph) => {
        const chunks = paragraph.split("&#10;");

        if (chunks.length > 2) {
          return (
            <ul key={paragraph} className="list-disc pl-6 space-y-2">
              {chunks.map(
                (listItem) =>
                  listItem && <li key={listItem}>{parse(listItem)}</li>
              )}
            </ul>
          );
        }

        return <p key={paragraph}>{parse(chunks?.[1] || chunks?.[0])}</p>;
      })}
    </>
  );
};
