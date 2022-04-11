import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Paragraph, Title } from "../globals";

const StyledInfos = styled.div`
  background-color: rgba(0, 0, 0, .3);
  bottom: 0;
  padding: 16px;
  position: absolute;
  width: 100%;
`;

const Banner = (props:any) => {
  const { hasTitle = false, className } = props;
  return (
    <div className={className}>
      <Image source="http://placekitten.com/500/500" classes="" alt='' title='' />
      <StyledInfos>
        {hasTitle
          ? (
            <Fragment>
              <Title hierarchy="h3" classes={'header3'} size={'24px'} line={'27.58px'}>{'top3[0].title'}</Title>
              <Paragraph classes={'paragraph'} size={'16px'} line={'24px'}>{'top3[0].overview'}</Paragraph>
            </Fragment>
          ) : (
            <Paragraph classes={'paragraph'} size={'16px'} line={'24px'}>{'top3[0].overview'}</Paragraph>
          )}
      </StyledInfos>
    </div>
  );
};

export default Banner;