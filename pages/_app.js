import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import RandomCatFact from "../components/RandomCatFact";
import FeaturedPosts from "../components/FeaturedPosts";
import PostSearch from "../components/PostSearch";
import PostFeed from "../components/PostFeed";
import BlogPost from "../components/BlogPost";
import ProjektMall from "../components/ProjektMall";
import WeatherWidget from "../components/WeatherWidget";

const components = {
  "post-feed": PostFeed,
  "post-search": PostSearch,
  "random-cat-fact": RandomCatFact,
  "featured-posts": FeaturedPosts,
  "blog-post": BlogPost,
  "projekt-mall": ProjektMall,
  "weather-widget": WeatherWidget,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PREVIEW_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
