import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ExamensProjekt = ({ blok }) => {
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>;
};

export default ExamensProjekt;
