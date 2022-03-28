import React from "react";
import Anchor from "./Anchor";

interface ListProps {
  classes: string;
  ordered: boolean;
  children: string[];
}

const List = (props:ListProps) => {
  const { classes, ordered = false, children} = props;

  const dataList = children.map((child: string, index: number) => <Anchor key={index} classes='' source={'#'}>{child}</Anchor>);

  return (
    ordered
      ? (
        <ol className={classes}>{dataList}</ol>
      )
      : (
        <ul className={classes}>{dataList}</ul>
      )
  );
};

export default List;