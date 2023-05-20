"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";
import { getCollection, Game } from "~api";
import { USERNAME_STORAGE_KEY } from "~utils";
import { Button, Username } from "~app/components";
import { GameList } from "../game-list";

export const CollectionForm: React.FC = () => {
  const [username, setUsername] = useLocalStorage(USERNAME_STORAGE_KEY, "");
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const { data: collection, isError } = useQuery<Game[]>(
    ["collection", username],
    () => getCollection({ username })
  );

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameInputValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(usernameInputValue);
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      {username ? (
        <Username />
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
        </div>
      )}
      {isError && <p>Oh no! Something bad happened. Please try again.</p>}
      <GameList collection={collection} />
    </div>
  );
};
