import styled from "styled-components";

export const MyLocation = () => {
    return (
        <StyledMyLocation>
            <Title></Title>
            <GoogleMap>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301014.5093529799!2d27.264429562590674!3d53.88419040449878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1732564049506!5m2!1sru!2sby"
            width={"300px"}
            height={"300px"}
            loading="lazy"
            >
            </iframe>
            </GoogleMap>
        </StyledMyLocation>
    )
}

const StyledMyLocation = styled.section``;
const Title = styled.h3``
const GoogleMap = styled.map`
`;