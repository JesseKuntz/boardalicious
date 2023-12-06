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

type CreateQueryStringProps = {
  key: string;
  value?: string;
  searchParams: ReadonlyURLSearchParams;
};

export const createQueryString = ({
  key,
  value,
  searchParams,
}: CreateQueryStringProps) => {
  const params = new URLSearchParams(searchParams.toString());

  if (!value) {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  return params.toString();
};
