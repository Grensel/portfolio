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
                        <Field placeholder="name"></Field>
                        <Field placeholder="subject"></Field>
                        <Field placeholder="massage" as={"textarea"}></Field>
                    </StyledForm>
                    <Button btnType="contact" type="submit">SEND MESSAGE</Button>
                </Container>
            </FlexWrapper>
        </StyledContact>
    )
};

const StyledContact = styled.section`
    min-height: 50vh;
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
    border-radius: 2vw;
    max-width: 80%;
    max-height: 50%;
    gap: 1vw;
    background-color: #57575747;
`

const Field = styled.input`
    background-color: #13121297;
    color: ${Thems.colors.text.description};
    padding: 1vw 2vw;
    border-radius: 1vw;
    max-width: 100%;
    min-width: 20%;
    field-sizing: content;
`