import { CollectionProvider } from "~app/components";
import { Randomizer } from "./components";

const FeedMePage = () => {
  return (
    <CollectionProvider>
      <Randomizer />
    </CollectionProvider>
  );
};

export default FeedMePage;
