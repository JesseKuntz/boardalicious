import { ReadonlyURLSearchParams } from "next/navigation";

export const routes = {
  home: "/",
  feedMe: "/feed-me",
  collection: "/collection",
};

export const getHrefWithParams = (
  route: string,
  searchParams: ReadonlyURLSearchParams
) => `${route}?${searchParams.toString()}`;
