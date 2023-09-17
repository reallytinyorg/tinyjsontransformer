import { JSONData, Mapping } from "./types";

export function transformJSON(json: JSONData, mapping: Mapping): JSONData {
  const transformedJSON: JSONData = {};

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const newKey = mapping[key] || key;
      transformedJSON[newKey] = json[key];
    }
  }

  return transformedJSON;
}
