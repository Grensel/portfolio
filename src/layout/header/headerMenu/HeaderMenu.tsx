import styled from "styled-components"
import { LinkButton } from "../../../components/LinkButton"

export const HeaderMenu = () => {
    return (
        <StyledMeny>
            <MenuList>
                <MenuItem>
                    <LinkButton btnType="outline">Skils</LinkButton>
                </MenuItem>
                <MenuItem>
                    <LinkButton btnType="outline">Projects</LinkButton>
                </MenuItem>
                <MenuItem>
                    <LinkButton btnType="primary">Let&apos;s Talk</LinkButton>
                </MenuItem>
            </MenuList>
        </StyledMeny>
    )
}

const StyledMeny = styled.nav`
    padding: 20px 0;
`
const MenuList = styled.ul`
    display: flex;
    gap: 13px;
`
const MenuItem = styled.li`
    &:last-child {
        margin-left: 11px;
    }
`

