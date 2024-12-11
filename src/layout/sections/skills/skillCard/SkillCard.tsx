import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/Icon";
import { Thems } from "../../../../styles/Thems";

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
                                fill={props.fill || `${Thems.colors.second}`}
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
    color: ${Thems.colors.primary};
`

const SkillTitle = styled.h4`
    align-self: start;
    color: ${Thems.colors.primary};
`

const SkillDescription = styled.p`
    color: ${Thems.colors.primary};
`