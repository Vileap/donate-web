import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import {
  generateOgImageForDonate,
  generateOgImageForPost,
} from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const donates = await getCollection("donate").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return donates.map(donate => ({
    params: { slug: slugifyStr(donate.data.title) },
    props: donate,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForDonate(props as CollectionEntry<"donate">),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
