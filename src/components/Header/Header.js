import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DekstopActiongGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DekstopActiongGroup>
        <Logo />
        <Subscribe>
          <Button>Subscribe</Button>
          <a href="/">Already a subscriber?</a>
        </Subscribe>
      </MainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DekstopActiongGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.desktopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
    display: grid;
    justify-content: revert;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const Subscribe = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    justify-self: end;
    display: block;
    position: relative;
    a {
      text-decoration: underline;
      text-align: center;
      font-style: italic;
      position: absolute;
      font-size: 90%;
      width: 100%;
    }
  }
`;

export default Header;
