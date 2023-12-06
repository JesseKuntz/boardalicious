"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "~utils/routes";
import { Modal } from "~app/components";
import { GameDetails } from "./components";

export const GAME_KEY = "game";

export const GameDetailsModal: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const id = searchParams.get(GAME_KEY);

  return (
    <Modal
      onOpenChange={(open) => {
        if (!open) {
          router.push(
            `${pathname}?${createQueryString({
              key: GAME_KEY,
              searchParams,
            })}`,
            { scroll: false }
          );
        }
      }}
      open={isClient && !!id}
    >
      {id && <GameDetails id={id} />}
    </Modal>
  );
};
