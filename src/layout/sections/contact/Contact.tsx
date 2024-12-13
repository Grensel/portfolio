import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { thems } from "../../../styles/Thems";
import { MyLocation } from "../../../components/MyLocation";
import { Container } from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Title color="second">CONTACT</Title>
                <FlexWrapper justify="center" gap={"100px"}>
                    <FlexWrapper direction="column">
                        <StyledForm>
                            <FlexWrapper justify="space-between">
                                <FlexWrapper direction="column">
                                    <label htmlFor="email">Your Email</label>
                                    <Field id="email" placeholder="Your Email"></Field>
                                </FlexWrapper>
                                <FlexWrapper direction="column">
                                    <label htmlFor="subject">Subject</label>
                                    <Field id="subject" placeholder="Subject"></Field>
                                </FlexWrapper>
                            </FlexWrapper>
                            <Field placeholder="massage" as={"textarea"}></Field>
                            <Button btnType="contact" type="submit">SEND MESSAGE</Button>
                        </StyledForm>
                    </FlexWrapper>
                    <MyLocation />
                </FlexWrapper>
            </Container>
        </StyledContact>
    )
};

const StyledContact = styled.section`
    padding: 4vw 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2vw;
    gap: 1vw;
    background-color: #57575747;
`

const Field = styled.input`
    background-color: #13121297;
    color: ${thems.colors.text.additional};
    padding: 1vw 2vw;
    max-width: 100%;
`