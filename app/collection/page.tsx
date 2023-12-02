"use client";

import {
  CollectionProvider,
  ToastProvider,
  ToastViewport,
} from "~app/components";
import { GameList } from "./components";

const CollectionPage: React.FC = () => {
  return (
    <ToastProvider>
      <CollectionProvider>
        <GameList />
      </CollectionProvider>
      <ToastViewport />
    </ToastProvider>
  );
};

export default CollectionPage;
