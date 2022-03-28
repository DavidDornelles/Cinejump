import React from 'react';
import { Link } from "react-router-dom";

interface AnchorProps {
  classes: string;
  source: string;
  children: string;
};

const Anchor = (props:AnchorProps) => {
  const { classes, source, children} = props;
  return (
    <a href={source} className={classes}>{children}</a>
  );
};

export default Anchor;