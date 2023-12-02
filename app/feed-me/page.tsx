import {
  CollectionProvider,
  ToastProvider,
  ToastViewport,
} from "~app/components";
import { Randomizer } from "./components";

const FeedMePage = () => {
  return (
    <ToastProvider>
      <CollectionProvider>
        <Randomizer />
      </CollectionProvider>
      <ToastViewport />
    </ToastProvider>
  );
};

export default FeedMePage;
