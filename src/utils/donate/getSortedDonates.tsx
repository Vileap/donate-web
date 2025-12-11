import type { CollectionEntry } from "astro:content";
import donateFilter from "./donateFilter";

const getSortedDonates = (posts: CollectionEntry<"donate">[]) => {
  return posts
    .filter(donateFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedDonates;
