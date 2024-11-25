"use server";

import { getAllService } from "@/lib/wp-api";

export const getServices = async ({ limit }: { limit?: number }) => {
  // const limitParam = limit ? `&per_page=${limit}` : "";
  // const url = `https://partner-biznes.store/wp-json/wp/v2/service?acf_format=standard&_fields=id,acf&order=asc${limitParam}`;
  // const response = await fetch(url, { cache: "no-store" });
  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  const response = await getAllService(limit);

  return response;
};
