import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import RandomCatFact from "../components/RandomCatFact";
import FeaturedPosts from "../components/FeaturedPosts";

const components = {
  "random-cat-fact": RandomCatFact,
  "featured-posts": FeaturedPosts,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
