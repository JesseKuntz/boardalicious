import Link from "next/link";
import { routes } from "~utils";
import { Button, Logo } from "./components";

const HomePage = () => {
  return (
    <div className="text-center space-y-12">
      <h1 className="text-3xl font-semibold">
        {"Hungry for a board game but can't decide what to play?"}
      </h1>
      <div className="w-full flex justify-center">
        <Logo />
      </div>
      <p>
        {
          "Boardalicious can help! We'll pick a game for you 😉 - just BYBGGU (bring your Board Game Geek username)."
        }
      </p>
      <div>
        <Link href={routes.feedMe} passHref>
          <Button>{"Let's Play!"}</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
