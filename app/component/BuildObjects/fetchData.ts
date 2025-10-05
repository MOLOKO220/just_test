import { BuiltObjectsData } from "./types";

export async function fetchBuiltObjects(): Promise<BuiltObjectsData[]> {
  const response = await fetch(
    "https://test.smarto.agency/smarto_complexes_list.json"
  );
  const data: BuiltObjectsData[] = await response.json();
  return data;
}
