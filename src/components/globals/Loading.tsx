import React from "react";
import { TailSpin } from 'react-loader-spinner';

const Loading = (props: {
  height:string,
  width:string,
  color:string
}) => <TailSpin height={props.height} width={props.width} color={props.color} ariaLabel="loading" />;

export default Loading;