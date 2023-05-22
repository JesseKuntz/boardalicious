"use client";

import { CollectionProvider } from "~app/components";
import { GameList } from "./components";

const CollectionPage: React.FC = () => {
  return (
    <CollectionProvider>
      <GameList />
    </CollectionProvider>
  );
};

export default CollectionPage;
