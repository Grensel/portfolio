import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { thems } from "../../styles/Thems";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <IconWrapper>
            <Icon
              iconId={"arrowbtn"}
              height={"18px"}
              width={"18px"}
              fill={`${thems.colors.footer}`}
            ></Icon>
          </IconWrapper>
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  padding: 10px;
  right: 30px;
  bottom: 30px;
  transform: rotate(45deg);
  background-color: ${thems.colors.background.additional};
  opacity: 0.9;
`;

const IconWrapper = styled.div`
  transform: rotate(-45deg);
`;
