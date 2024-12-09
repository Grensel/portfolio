import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Thems } from "../../../styles/Thems"

export const HeaderMenu = () => {
    return (
        <StyledMeny>
            <MenuNav>
                <MenuList>
                    <MenuItem>
                        <Button btnType="outline">
                            <a href="#">Skils</a>
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button btnType="outline">
                            <a href="#">Projects</a>
                        </Button>
                    </MenuItem>
                </MenuList>
            </MenuNav>
            <Button btnType="primary">
                <PrimaryBtnLink href="#" >Let&apos;s Talk</PrimaryBtnLink>
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

const PrimaryBtnLink = styled.a.attrs(( {href} )=> ({
    href: href || "#",
}))`
    color: ${Thems.colors.primary};
`