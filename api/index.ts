import { xml2json } from "xml-js";

const BGG_BASE_URL = "https://boardgamegeek.com/xmlapi2";

type TextField = {
  text: string;
};

export type Game = {
  image: TextField;
  name: TextField;
  yearpublished: TextField;
};

type GetCollection = (values: { username: string }) => Promise<Game[]>;

export const getCollection: GetCollection = async ({ username }) => {
  if (!username) {
    return [];
  }

  const response = await fetch(
    `${BGG_BASE_URL}/collection?username=${username}&own=1`
  );
  const xml = await response.text();
  const data = JSON.parse(xml2json(xml, { compact: true, textKey: "text" }));

  return data.items.item as Game[];
};
