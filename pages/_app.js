import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "../components/Grid";
import Page from "../components/Page";
import FeaturedPosts from "../components/FeaturedPosts";
import PostSearch from "../components/PostSearch";
import PostFeed from "../components/PostFeed";
import BlogPost from "../components/BlogPost";
import ProjektMall from "../components/ProjektMall";
import WeatherWidget from "../components/WeatherWidget";

const components = {
  "post-feed": PostFeed,
  "post-search": PostSearch,
  "featured-posts": FeaturedPosts,
  "blog-post": BlogPost,
  "projekt-mall": ProjektMall,
  "weather-widget": WeatherWidget,
  grid: Grid,
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
