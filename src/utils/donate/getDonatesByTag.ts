import type { CollectionEntry } from "astro:content";
import getSortedDonates from "./getSortedDonates";
import { slugifyAll } from "@utils/slugify";

const getDonatesByTag = (posts: CollectionEntry<"donate">[], tag: string) =>
  getSortedDonates(
    posts.filter(post => slugifyAll(post.data.tags).includes(tag))
  );

export default getDonatesByTag;
