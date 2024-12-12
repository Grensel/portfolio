import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Thems } from "../../../styles/Thems"

export const HeaderMenu = () => {
    return (
        <StyledMeny>
            <MenuNav>
                <MenuList>
                    <MenuItem>
                        <Button as="a" href="#" btnType="outline">
                            Skils
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button as="a" href="#" btnType="outline">
                            Projects
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button as="a" href="#" btnType="outline">
                            About
                        </Button>
                    </MenuItem>
                </MenuList>
            </MenuNav>
            <Button as="a" href="#" btnType="primary">
                Let&apos;s Talk
            </Button>
            <BurgerMenu />
        </StyledMeny>
    )
}

const StyledMeny = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
`

const MenuNav = styled.nav`
    @media ${Thems.media.mobile} {
        display: none
    }
`

const MenuList = styled.ul`
    display: flex;
    gap: 1vw;

`

const MenuItem = styled.li`
    &:last-child {
        margin-right: 1vw;
    }
`

const BurgerMenu = styled.div`
    display: none;
    cursor: pointer;
    width: 10vw;
    height: 0.2vh;
    background-color: ${Thems.colors.text.title};



    @media ${Thems.media.mobile} {
        display: block;
    }
`