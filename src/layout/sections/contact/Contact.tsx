import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/Title";
import { Button } from "../../../components/Button";
import { Thems } from "../../../styles/Thems";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper direction="column">
                <Title color="second">Contact</Title>
                <Container>
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
                    </StyledForm>
                    <Button btnType="contact" type="submit">SEND MESSAGE</Button>
                </Container>
            </FlexWrapper>
        </StyledContact>
    )
};

const StyledContact = styled.section`
    padding: 4vw 0;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2vw;
    max-width: 80%;
    max-height: 50%;
    gap: 1vw;
    background-color: #57575747;
`

const Field = styled.input`
    background-color: #13121297;
    color: ${Thems.colors.text.description};
    padding: 1vw 2vw;
    max-width: 100%;
    field-sizing: content;
`