import React, { useEffect, useState } from "react";
import { getMovies } from "services";
import Banner from "../banner/Banner";
import {
  Section
} from "../styled/StyledTopRated";

const TOP_RATED = 'top_rated';

const TopRated = (props:any) => {
  const [topRated, setTopRated]:any[] = useState([]);

  useEffect(() => {
    getMovies(TOP_RATED)
      .then(data => {
        const { results } = data;
        setTopRated([...results])
      })
      .catch(error => error);  
  }, []);
  

  return (
    <Section id={TOP_RATED}>
      {topRated && topRated.slice(0,3).map((movie: any[], index: number) => {
        if (index === 0) {
          return <Banner key={index} movies={movie} area='first' hasTitle={true} />
        } else if (index === 1) {
          return <Banner key={index} movies={movie} area='second' />
        } else {
          return <Banner key={index} movies={movie} area='third' />
        }
      })}
    </Section>
  );
};

export default TopRated;