import styled from "styled-components"

export const HeaderMenu = () => {
    return (
        <StyledMeny>
            <MenuList>
                <MenuItem>
                    <MenuLink>Skils</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>Woks</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>Contact</MenuLink>
                </MenuItem>
            </MenuList>
        </StyledMeny>
    )
}

const StyledMeny = styled.nav`
`
const MenuList = styled.ul`
    display: flex;
    
`
const MenuItem = styled.li`
    
`
const MenuLink = styled.a.attrs((props)=>(({
    href: props.href || "#",
})))`
`
