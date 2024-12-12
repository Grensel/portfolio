import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photo from '../../../assets/img/photo.png'
import { Thems } from "../../../styles/Thems"

export const Main = () => {
    return (
        <StyledMein>
            <Container>
                <FlexWrapper direction={"column"}>
                    <MainTitel>HELLO <br/>I&apos;M SERGEY</MainTitel>
                    <Description>FRONT-END <br/> DEVELOPER</Description>
                </FlexWrapper>
                <BackSquare>
                    <Photo src={photo} alt={"it's me"}/>
                </BackSquare>
            </Container>
        </StyledMein>
    )
}

export const StyledMein = styled.section`
    overflow: hidden;
    padding: 18vh 0;

    @media ${Thems.media.tablet} {
        padding: 12vh 0;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10vw;

    ${FlexWrapper} {
        margin: 0; 
    }

    @media ${Thems.media.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 2vw;
    };

    @media ${Thems.media.laptop}, ${Thems.media.desktop} {
        white-space: nowrap;
    };
`

const Photo = styled.img`
    width: 39.6vw;
    height: 39.6vw;
    rotate: 16.2deg; 
    min-width: 300px;;
    min-height: 300px;
    background-color:#F7F7F7;

    @media ${Thems.media.desktop} {
        width: 570px;
        height: 570px;
        rotate: 16.2deg; 
        background-color:#F7F7F7;
    }

    @media ${Thems.media.tablet} {
        min-width: 250px;
        min-height: 250px;
    }

    &::before {
        width: 39.6vw;
        height: 39.6vw;

        background-color:#F7F7F7;
        rotate: -18.7deg; 

        @media ${Thems.media.desktop} {
            position: relative;
            top: 10.8vh;
            right: 194px;
            width: 570px;
            height: 570px;
        }

        @media ${Thems.media.laptop} {
            position: relative;
            top: 10.8vh;
            right: 13.5vw;
        }
    }
`

const BackSquare = styled.div`
    width: 39.6vw;
    height: 39.6vw;

    background-color:#E7E7E7;
    rotate: -8.7deg; 

    @media ${Thems.media.desktop} {
        position: relative;
        top: 10.8vh;
        right: 194px;
        width: 570px;
        height: 570px;
    }

    @media ${Thems.media.laptop} {
        position: relative;
        top: 10.8vh;
        right: 13.5vw;
    }



    @media ${Thems.media.tablet} {
        position: static;
        margin-top: 12vw;
        margin-bottom: 6vw;
        min-width: 250px;
        min-height: 250px;
    }
`

const MainTitel = styled.span`
    z-index: 1;
    color: ${Thems.colors.text.title};
    font-family: 'Epilogue', sans-serif;
    font-weight: 800;
    font-size: 150px;
    line-height: 170px;

    @media (max-width: 1440px){
    font-size: calc(35px + 115*(100vw/1440));
    line-height: calc(50px + 120*(100vw/1440));
    }
`

const Description = styled.h1`
    z-index: 1;
    color: ${Thems.colors.text.title};
` 