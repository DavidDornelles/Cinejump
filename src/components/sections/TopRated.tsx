import React from "react";
import {
  Section,
  FirstBanner,
  SecondBanner,
  ThirdBanner
} from '../styled/TopRated'

const TopRated = (props:any) => {
  return (
    <Section id="top_rated">
      <FirstBanner position='first' hasTitle={true} />
      <SecondBanner position='second' />
      <ThirdBanner position='third' />
    </Section>
  );
};

export default TopRated;