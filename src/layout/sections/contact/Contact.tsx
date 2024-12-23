import React from "react";
import { S } from "./Contact_Styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <Title>CONTACT</Title>
        <FlexWrapper justify={"space-around"} gap={50} wrap={"wrap"}>
          <S.ContactBox>
            <FlexWrapper direction="column" gap={20}>
              <S.ContactTitle>Send Me</S.ContactTitle>
              <S.StyledForm>
                <FlexWrapper height={"auto"} gap={16}>
                  <FlexWrapper direction={"column"} gap={16} grow={1}>
                    <S.FieldTitle htmlFor={"email"}>Your Email</S.FieldTitle>
                    <S.Field id={"email"} placeholder={"Your Email"}></S.Field>
                  </FlexWrapper>
                  <FlexWrapper direction={"column"} gap={16} grow={1}>
                    <S.FieldTitle htmlFor={"subject"}>Subject</S.FieldTitle>
                    <S.Field id={"subject"} placeholder={"Subject"}></S.Field>
                  </FlexWrapper>
                </FlexWrapper>
                <S.FieldTitle htmlFor={"textarea"}>You massage</S.FieldTitle>
                <S.Field
                  id={"textarea"}
                  placeholder={"Your massage"}
                  as={"textarea"}
                ></S.Field>
                <FlexWrapper height="auto" gap={16}>
                  <Button btnType={"contact"} type={"submit"}>
                    SEND MESSAGE
                  </Button>
                  <Button btnType={"contact"} type={"reset"}>
                    RESET
                  </Button>
                </FlexWrapper>
              </S.StyledForm>
            </FlexWrapper>
          </S.ContactBox>
          <S.ContactBox>
            <FlexWrapper direction={"column"} gap={20}>
              <S.MapTitle>My location</S.MapTitle>
              <S.GoogleMap>
                <iframe
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301014.5093529799!2d27.264429562590674!3d53.88419040449878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1732564049506!5m2!1sru!2sby"
                  }
                  width={"100%"}
                  height={"100%"}
                  loading={"lazy"}
                  title={"Map"}
                ></iframe>
              </S.GoogleMap>
            </FlexWrapper>
          </S.ContactBox>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};
