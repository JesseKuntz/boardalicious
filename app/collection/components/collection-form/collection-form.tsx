"use client";

import React, { useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getCollection, Game } from "~api";
import { Button } from "~app/components";
import { GameCard } from "./components";

export const CollectionForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const {
    data: collection,
    isInitialLoading,
    isRefetching,
    isError,
    refetch,
  } = useQuery<Game[]>(
    ["collection", username],
    () => getCollection({ username }),
    { enabled: false }
  );
  const queryClient = useQueryClient();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await queryClient.invalidateQueries({ queryKey: ["collection", username] });

    refetch();
  };

  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-semibold">Fetch Your Collection:</h1>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <div className="flex items-center flex-wrap gap-4">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <Button type="submit" disabled={!username}>
            Fetch Collection
          </Button>
        </div>
      </form>
      {(isInitialLoading || isRefetching) && <p>Loading...</p>}
      {isError && <p>Oh no! Something bad happened. Please try again.</p>}
      {collection && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Board Game Collection:</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {collection.map((game) => (
              <GameCard key={game.name.text} game={game} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
