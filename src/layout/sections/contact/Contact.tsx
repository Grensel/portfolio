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
        <Title>CONTACT</Title>
        <FlexWrapper justify={"space-around"} gap={"20px"} wrap={"wrap"}>
          <ContactBox>
            <FlexWrapper direction="column" gap={"20px"}>
              <ContactTitle>Send Me</ContactTitle>
              <StyledForm>
                <FlexWrapper height={"auto"} gap={"16px"}>
                  <FlexWrapper direction={"column"} gap={"16px"}>
                    <FieldTitle htmlFor={"email"}>Your Email</FieldTitle>
                    <Field id={"email"} placeholder={"Your Email"}></Field>
                  </FlexWrapper>
                  <FlexWrapper direction={"column"} gap={"16px"}>
                    <FieldTitle htmlFor={"subject"}>Subject</FieldTitle>
                    <Field id={"subject"} placeholder={"Subject"}></Field>
                  </FlexWrapper>
                </FlexWrapper>
                <FieldTitle htmlFor={"textarea"}>You massage</FieldTitle>
                <Field
                  id={"textarea"}
                  placeholder={"You massage"}
                  as={"textarea"}
                ></Field>
                <FlexWrapper height="auto" gap={"16px"}>
                  <Button btnType={"contact"} type={"submit"}>
                    SEND MESSAGE
                  </Button>
                  <Button btnType={"contact"} type={"reset"}>
                    RESET
                  </Button>
                </FlexWrapper>
              </StyledForm>
            </FlexWrapper>
          </ContactBox>
          <ContactBox>
            <FlexWrapper direction="column" gap={"20px"}>
              <ContactTitle>My location</ContactTitle>
              <GoogleMap>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301014.5093529799!2d27.264429562590674!3d53.88419040449878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1732564049506!5m2!1sru!2sby"
                  width={"100%"}
                  height={"100%"}
                  loading={"lazy"}
                  title={"Map"}
                ></iframe>
              </GoogleMap>
            </FlexWrapper>
          </ContactBox>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const ContactBox = styled.div`
  width: 100%;
  max-width: 500px;
`;

const ContactTitle = styled.h3`
  color: ${thems.colors.text.title};
  font-family: "Epilogue", sans-serif;
  font-size: 48px;
  font-weight: 600;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 450px;
  padding: 20px;
  gap: 16px;
  background-color: ${thems.colors.background.pseudo};
`;

const Field = styled.input`
  background-color: ${thems.colors.background.photo};
  color: ${thems.colors.footer};
  padding: 10px 20px;
  resize: vertical;
  width: 100%;
  height: 100%;
  border: none;
`;

const FieldTitle = styled.label`
  color: ${thems.colors.text.title};
`;

const GoogleMap = styled.map`
  width: 100%;
  aspect-ratio: 1/1;
`;
