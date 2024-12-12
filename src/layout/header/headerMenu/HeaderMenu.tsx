import styled from "styled-components"
import { Button } from "../../../components/Button"
import { thems } from "../../../styles/Thems"

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMeny>
            <MenuNav>
                <MenuList>
                    {props.menuItems.map((item: string, index: number) => { 
                        return <MenuItem key={index}>
                            <Button as="a" href="#" btnType="outline">
                                {item}
                            </Button>
                        </MenuItem>
                    })}
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
    gap: 20px;
`

const MenuNav = styled.nav`
    @media ${thems.media.mobile} {
        display: none
    }
`

const MenuList = styled.ul`
    display: flex;
    gap: 10px;

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
    background-color: ${thems.colors.text.title};



    @media ${thems.media.mobile} {
        display: block;
    }
`