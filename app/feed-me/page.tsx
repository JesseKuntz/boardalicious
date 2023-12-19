import { CollectionProvider } from "~app/components";
import { Randomizer } from "./components";

export const metadata = {
  title: "Feed Me | Boardalicious",
};

const FeedMePage = () => {
  return (
    <CollectionProvider>
      <Randomizer />
    </CollectionProvider>
  );
};

export default FeedMePage;
