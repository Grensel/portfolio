import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { thems } from "../../../styles/Thems";
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
              <Button btnType="contact" type="submit">
                SEND MESSAGE
              </Button>
            </StyledForm>
          </FlexWrapper>
          <GoogleMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301014.5093529799!2d27.264429562590674!3d53.88419040449878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1732564049506!5m2!1sru!2sby"
              width={"300px"}
              height={"300px"}
              loading="lazy"
            ></iframe>
          </GoogleMap>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding: 4vw 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background-color: #57575747;
`;

const Field = styled.input`
  background-color: #13121297;
  color: ${thems.colors.text.additional};
  padding: 10px 20px;
  max-width: 100%;
`;

const GoogleMap = styled.map``;
