import React from "react";

interface ArticleProps {
  children: any;
  classes?: string;
  styles?: object;
}

const Article = (props:ArticleProps) => {
  const { children, classes, styles } = props;

  return (
    <article className={classes} style={styles}>{children}</article>
  );
};

export default Article;