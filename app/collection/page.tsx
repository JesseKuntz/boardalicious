import { CollectionProvider } from "~app/components";
import { GameList } from "./components";

export const metadata = {
  title: "Collection | Boardalicious",
};

const CollectionPage: React.FC = () => {
  return (
    <CollectionProvider>
      <GameList />
    </CollectionProvider>
  );
};

export default CollectionPage;
