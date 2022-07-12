import React from "react";
import ActorPoster from "./ActorPoster";
import {
	Section,
	Title
} from "../globals";
import { StyledSectionContainer } from "../styled/StyledSectionContainer";
import * as DS from "../../css/variables";

interface ActorsSectionProps {
	id: string;
	title: string;
	cast: any[];
	style?: any;
}

const ActorsSection = (props: ActorsSectionProps) => {
	const {
		id,
		title,
		cast,
		style,
	} = props;

	return (
		<Section id={id} classes={'container'} >
			<Title
				hierarchy={'h2'}
				classes={"section-title"}
				style={{
					color: `${DS.COLOR_PRIMARY}`,
					fontSize: '24px',
					fontWeight: '300',
					lineHeight: '27.58px',
					marginBottom: '16px',
				}}
			>{title}</Title>
			<StyledSectionContainer>
				{!!cast && cast.map((item: any, index: number) => (
					<ActorPoster
						key={index}
						style={style}
						actor={item}
					/>
				))
				}
			</StyledSectionContainer>
		</Section>
	);
};

export default ActorsSection;