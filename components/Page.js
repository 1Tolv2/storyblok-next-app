import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import DadJoke from "./DadJoke";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.want_a_dad_joke && <DadJoke />}
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
