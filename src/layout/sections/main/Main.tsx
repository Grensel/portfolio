import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photo from '../../../assets/img/photo.png'
import { Thems } from "../../../styles/Thems"

export const Main = () => {
    return (
        <StyledMein>
            <FlexWrapper >
                <FlexWrapper direction="column">
                    <MainTitel>HELLO <br/>I&apos;M SERGEY</MainTitel>
                    <Description>FRONT-END <br/> DEVELOPER</Description>
                </FlexWrapper>
                <BackSquare>
                    <Photo src={photo} alt="it's me"/>
                </BackSquare>
            </FlexWrapper>
        </StyledMein>
    )
}

export const StyledMein = styled.section`
    padding: 121px 0;
    margin-bottom: 67px;
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    rotate: 16.2deg; 
    background-color:#F7F7F7;
`
const BackSquare = styled.div`
    position: relative;
    right: 145px;
    top: 123px;
    margin-left: -200px;
    width: 570px;
    height: 570px;
    rotate: -8.7deg; 
    background-color:#E7E7E7;
`
const MainTitel = styled.h1`
    z-index: 1;
    color: ${Thems.colors.text.title};
    font-family: 'Epilogue';
    font-weight: 800;
    font-size: 150px;
    line-height: 176px;
`
const Description = styled.p`
    z-index: 1;
    color: ${Thems.colors.text.title};
    font-family: 'Epilogue';
    font-weight: 400;
    font-size: 110px;
    line-height: 146px;
` 