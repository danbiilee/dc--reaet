import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/button';
import Icon from '../common/icon';
import {
  faBars,
  faVideo,
  faCaretSquareDown,
  faBell,
  faUserCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { themeColor } from '../../utils/colorStyle';

const HeaderContainer = styled.header`
  display: flex;
  padding: 0 30px;
  height: 70px;
  svg {
    font-size: 1.4rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const LogoSection = styled(Div)`
  width: 240px;
  .fa-youtube {
    font-size: 2.2rem;
  }
`;

const SearchSection = styled(Div)`
  flex: 1;
  padding: 0 30px;
  background-color: beige;
  input {
    height: 43px;
    padding: 10px 20px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.gray300};
    border-radius: 3px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.3rem;
  }
`;

const UserSection = styled(Div)`
  justify-content: flex-end;
  width: 300px;
  form {
    display: flex;
    align-items: center;
  }
  .fa-user-circle {
    font-size: 2.4rem;
  }
`;

const ButtonMargin = styled(Button)`
  margin-right: 40px;
`;

const ButtonSearch = styled(Button)`
  height: 43px;
  padding: 0 40px;
  background-color: ${props => props.theme.gray100};
  border: 1px solid ${props => props.theme.gray300};
  border-radius: 3px;
  border
`;

const Header = ({ searchKeyword, handleChange, handleSearch }) => {
  return (
    <HeaderContainer>
      <LogoSection>
        <ButtonMargin>
          <Icon icon={faBars} color={themeColor.grayDark} />
        </ButtonMargin>
        <h1>
          <Link to="/">
            <Icon icon={faYoutube} color={themeColor.red} />
          </Link>
        </h1>
      </LogoSection>
      <SearchSection>
        <form className="form__search" onSubmit={handleSearch}>
          <input
            className="input__search"
            type="text"
            placeholder="Search"
            value={searchKeyword}
            onChange={handleChange}
          />
          <ButtonSearch type="submit">
            <Icon icon={faSearch} color={themeColor.gray} />
          </ButtonSearch>
        </form>
      </SearchSection>
      <UserSection>
        <ButtonMargin>
          <Icon icon={faVideo} color={themeColor.grayDark} />
        </ButtonMargin>
        <ButtonMargin>
          <Icon icon={faCaretSquareDown} color={themeColor.grayDark} />
        </ButtonMargin>
        <ButtonMargin>
          <Icon icon={faBell} color={themeColor.grayDark} />
        </ButtonMargin>
        <Button>
          <Icon icon={faUserCircle} color={themeColor.grayDark} />
        </Button>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
