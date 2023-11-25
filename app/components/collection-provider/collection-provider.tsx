"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiInfo } from "react-icons/fi";
import { getCollection, Game } from "~api";
import { Button, Username, Logo, Tooltip } from "~app/components";
import { useUsername } from "~app/hooks";

type Props = {
  children: JSX.Element;
};

export const CollectionProvider: React.FC<Props> = ({ children }) => {
  const { username, updateUsername } = useUsername();
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const {
    data: collection,
    isLoading,
    isRefetching,
    isError,
    refetch,
  } = useQuery<Game[]>(["collection", username], () =>
    getCollection({ username })
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInputValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUsername(usernameInputValue);
  };

  const renderChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, { collection })
    );

  if (!isClient) {
    return null;
  }

  return (
    <div className="space-y-4 flex flex-col items-center">
      {username ? (
        <Username refetch={refetch} />
      ) : (
        <div>
          <h1 className="text-2xl">Import Your Collection:</h1>
          <form onSubmit={handleFormSubmit} className="mt-4">
            <div className="flex items-center flex-wrap gap-4">
              <input
                type="text"
                name="username"
                value={usernameInputValue}
                onChange={handleUsernameInputChange}
                placeholder="Enter your username"
                className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <Button type="submit" disabled={!usernameInputValue}>
                Fetch Collection
              </Button>
            </div>
          </form>
          <div className="flex items-center gap-2 mt-3 text-slate-400">
            <p>What&apos;s my username?</p>
            <Tooltip trigger={<FiInfo />}>
              <p>
                Enter your Board Game Geek username in the box above in order to
                import your collection. You can find your username on{" "}
                <a
                  className="underline"
                  href="https://boardgamegeek.com/"
                  target="_blank"
                >
                  https://boardgamegeek.com/
                </a>{" "}
                in the navigation bar, at the top of the page (once you are
                logged in).
              </p>
            </Tooltip>
          </div>
        </div>
      )}
      {(isLoading || isRefetching) && username && (
        <div className="pt-12 animate-pulse">
          <Logo />
        </div>
      )}
      {isError && (
        <p className="text-center text-red-300">
          Oh no! Something bad happened. Please make sure that your username is
          correct, and try again. If the issue persists, try again in a few
          minutes (Board Game Geek may be limiting our requests).
        </p>
      )}
      {renderChildren()}
    </div>
  );
};
