import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
	Article,
	Image,
	Title,
} from "../globals";

import * as DS from '../../css/variables';

const styles = {
	borderRadius: '10px',
	overflow: 'hidden',
	position: "relative",
} as React.CSSProperties;

const ActorInfosContainer = styled.div`
	background-color: ${DS.COLOR_LIGHT};
	bottom: 0;
	padding: 16px 8px;
	position: absolute;
	width: 100%;
`;

const ActorCharacter = styled.p`
	color: ${DS.COLOR_LIGHTTEXT};
	font-size: 14px;
	line-height: 16px;
	overflow: hidden;
	white-space: nowrap;
`;

const ActorPoster = (props: { style: any; actor: any; }) => {
	const { style, actor } = props;
	const {
		character,
		id,
		name,
		profile_path
	} = !!actor && actor;

	return !profile_path
		? null
		: (<Article key={id} styles={{ ...styles, ...style }}>
			<Link key={id} to={`/cast/${id}`}>
				<picture>
					<Image source={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} title={name} />
				</picture>
			</Link>
			<ActorInfosContainer>
				<Title hierarchy={'h4'} size={'16px'} line={'18px'} style={{color: DS.COLOR_SECONDARY, marginBottom: '8px', overflow: 'hidden', whiteSpace: 'nowrap'}} title={`${name}`}>{name}</Title>
				<ActorCharacter title={`${character}`}>{character}</ActorCharacter>
			</ActorInfosContainer>
		</Article>)
};

export default ActorPoster;