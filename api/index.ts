import { xml2json } from "xml-js";

const BGG_BASE_URL = "https://boardgamegeek.com/xmlapi2";

type TextField = {
  text: string;
};

type ValueField = {
  attributes: { value: string };
};

export type Game = {
  attributes: {
    objectid: string;
  };
  image: TextField;
  name: TextField;
  yearpublished: TextField;
};

export type GameDetails = {
  name: ValueField[] | ValueField;
  image: TextField;
  attributes: {
    id: string;
  };
  description: TextField;
  maxplayers: ValueField;
  minplayers: ValueField;
  maxplaytime: ValueField;
  minplaytime: ValueField;
};

type GetCollection = (values: { username: string }) => Promise<Game[]>;

type GetGameDetails = (values: { id: string }) => Promise<GameDetails | null>;

const xml2jsonConfig = {
  compact: true,
  textKey: "text",
  attributesKey: "attributes",
};

export const getCollection: GetCollection = async ({ username }) => {
  if (!username) {
    return [];
  }

  const response = await fetch(
    `${BGG_BASE_URL}/collection?username=${username}&own=1&subtype=boardgame`
  );
  const xml = await response.text();
  const data = JSON.parse(xml2json(xml, xml2jsonConfig));

  return data.items.item as Game[];
};

export const getGameDetails: GetGameDetails = async ({ id }) => {
  if (!id) {
    return null;
  }

  const response = await fetch(`${BGG_BASE_URL}/thing?id=${id}`);
  const xml = await response.text();
  const data = JSON.parse(xml2json(xml, xml2jsonConfig));

  return data.items.item as GameDetails;
};
