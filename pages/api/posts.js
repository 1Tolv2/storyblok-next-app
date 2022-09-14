const StoryblokClient = require("storyblok-js-client");
let Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PREVIEW_STORYBLOK_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  const response = await Storyblok.get("cdn/stories");

  const stories = response.data.stories.filter((post) => {
    return !post.is_startpage && post.full_slug.split("/")[0] === "posts";
  });
  return res.json({ stories });
}
