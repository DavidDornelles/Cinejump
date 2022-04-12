import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../banner/Banner";
import {
  Section
} from "../styled/StyledTopRated";

const TOP_RATED = 'top_rated';

const TopRated = (props:any) => {
  const [topRated, setTopRated]:any[] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_URL}${TOP_RATED}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then(response => {
        const { data: { results }} = response;
        setTopRated([...results])
      });
  
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