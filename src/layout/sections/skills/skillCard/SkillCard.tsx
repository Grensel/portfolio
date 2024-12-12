import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/Icon";
import { thems } from "../../../../styles/Thems";

type SkillCardPropsType = {
    skillNumber: string
    iconId: string
    viewBox?: string
    height?: string
    width?: string
    fill?: string
    skillTitle: string
    description: string
};

export const SkillCard = (props: SkillCardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper>
                <SkillNumber>{props.skillNumber}.</SkillNumber>
                <FlexWrapper direction="column">
                        <SkillTitle>
                            <Icon 
                                iconId={props.iconId}
                                viewBox={props.viewBox || "0 0 50 50"}
                                height={props.height || "1em"}
                                width={props.width || "1em"}
                                fill={props.fill || `${thems.colors.text.second}`}
                            />
                            {props.skillTitle}
                        </SkillTitle>
                    <SkillDescription>{props.description}</SkillDescription>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    max-width: 440px;
    max-height: 146px;
    gap: 20px;
`

const SkillNumber = styled.h3`
    padding-top: 20px;
    color: ${thems.colors.text.second};
`

const SkillTitle = styled.h4`
    align-self: start;
    color: ${thems.colors.text.second};
`

const SkillDescription = styled.p`
    color: ${thems.colors.text.second};
`