import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/Title";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper direction="column">
                <Title>Contact</Title>
                <FlexWrapper>asdfasf</FlexWrapper>
            </FlexWrapper>
        </StyledContact>
    )
};

const StyledContact = styled.section`
background-color: '#fffff';
`