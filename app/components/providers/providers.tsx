"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  GameDetailsModal,
  ToastProvider,
  ToastViewport,
} from "~app/components";

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <GameDetailsModal />
        <ToastViewport />
        {children}
      </ToastProvider>
    </QueryClientProvider>
  );
};
